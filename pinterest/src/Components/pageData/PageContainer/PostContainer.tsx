"use client";

import PostComp from "../PageComp/Write/PostComp";
import { useRecoilValue } from "recoil";
import { Logincheck, Userdata } from "@/Context/usercheck";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "@/lib/Baseurls";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export interface IPostData {
  id: number;
  title: string;
  postimg: string;
  content: string;
  tag: string[];
  categoryname: string;
  postuser: string;
  postuserimg: string;
  comment: {
    user: string;
    img: string;
    content: string;
  }[];
}

const PostContainer = () => {
  const [comment, setcomment] = useState<string>("");
  const login = useRecoilValue(Logincheck);
  const user = useRecoilValue(Userdata);
  const params = useParams();
  const { data, mutate } = useMutation({
    mutationKey: ["postdata"],
    mutationFn: async () => {
      const { data } = await axios.get(`${BaseURL}/getpost/${params?.id}`);
      const lastdata: IPostData = data;
      return lastdata;
    },
  });

  const setinput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setcomment(e.target.value);
  }, []);

  const submit = async () => {
    await axios.post(
      `${BaseURL}/comment/write`,
      { postId: data?.id, userId: user?.userid, content: comment },
      { withCredentials: true }
    );
  };
  useEffect(() => {
    mutate();
  }, []);
  return (
    <PostComp
      data={data}
      login={login}
      user={user}
      setinput={setinput}
      setcomment={setcomment}
      submit={submit}
      comment={comment}
      mutate={mutate}
    />
  );
};
export default PostContainer;
