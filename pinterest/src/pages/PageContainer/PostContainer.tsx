"use client";

import { IPostData } from "@/app/post/[id]/page";
import PostComp from "../PageComp/Write/PostComp";
import { useRecoilValue } from "recoil";
import { Logincheck, Userdata } from "@/Context/usercheck";
import { ChangeEvent, useCallback, useState } from "react";
import axios from "axios";
import { BaseURL } from "@/lib/Baseurls";

interface IProps {
  data: IPostData;
}

const PostContainer = ({ data }: IProps) => {
  const [comment, setcomment] = useState<string>("");
  const login = useRecoilValue(Logincheck);
  const user = useRecoilValue(Userdata);

  const setinput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setcomment(e.target.value);
  }, []);
  const submit = async () => {
    await axios.post(
      `${BaseURL}/comment/write`,
      { postId: data.id, userId: user?.userid, content: comment },
      { withCredentials: true }
    );
  };
  return (
    <PostComp
      data={data}
      login={login}
      user={user}
      setinput={setinput}
      setcomment={setcomment}
      submit={submit}
    />
  );
};
export default PostContainer;
