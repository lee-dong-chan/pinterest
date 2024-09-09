import { IPostData } from "@/app/post/[id]/page";

import DataComp from "../post/DataComp";
import ImgComp from "../post/ImgComp";
import { IUser } from "@/Components/Conteiner/LayoutContainer";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  data?: IPostData;
  login: string;
  user: IUser;
  setinput: (e: ChangeEvent<HTMLInputElement>) => void;
  setcomment: Dispatch<SetStateAction<string>>;
  submit: () => Promise<void>;
}

const PostComp = ({
  data,
  login,
  user,
  setinput,
  setcomment,
  submit,
}: IProps) => {
  const ImgBaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;

  return (
    <div className="mt-10 w-[60rem] max-h-[50rem] border rounded-[1rem] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-evenly">
      <ImgComp ImgBaseURL={ImgBaseURL} data={data} />
      <DataComp
        ImgBaseURL={ImgBaseURL}
        data={data}
        login={login}
        user={user}
        setinput={setinput}
        setcomment={setcomment}
        submit={submit}
      />
    </div>
  );
};
export default PostComp;
