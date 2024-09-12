import DataComp from "../post/DataComp";
import ImgComp from "../post/ImgComp";
import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { IPostData } from "@/Components/pageData/PageContainer/PostContainer";
import { UseMutateFunction } from "@tanstack/react-query";

interface IProps {
  data?: IPostData;
  login: string;
  user: IUser;
  setinput: (e: ChangeEvent<HTMLInputElement>) => void;
  setcomment: Dispatch<SetStateAction<string>>;
  submit: () => Promise<void>;
  mutate: UseMutateFunction<IPostData, Error, void, unknown>;
  comment: string;
}
const PostComp = ({
  data,
  login,
  user,
  setinput,
  setcomment,
  submit,
  comment,
  mutate,
}: IProps) => {
  const ImgBaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  const { isdesktop } = useBreakPoint();
  return (
    <div className="flex flex-col items-center">
      {isdesktop && (
        <div className="flex w-fit mx-auto items-center text-[0.8rem]">
          <Link href={"/list"}>
            <div className="p-1 border rounded-[0.8rem] bg-gray-200 ">탐색</div>
          </Link>
          <div className="px-2">
            <FaChevronLeft />
          </div>
          <div>{data?.categoryname}</div>
        </div>
      )}
      <div
        className={
          isdesktop
            ? `mt-10 w-[60rem] max-h-[50rem] border rounded-[1rem] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-evenly`
            : ""
        }
      >
        <ImgComp ImgBaseURL={ImgBaseURL} data={data} />

        <DataComp
          ImgBaseURL={ImgBaseURL}
          data={data}
          login={login}
          user={user}
          setinput={setinput}
          setcomment={setcomment}
          submit={submit}
          comment={comment}
          mutate={mutate}
        />
      </div>
    </div>
  );
};
export default PostComp;
