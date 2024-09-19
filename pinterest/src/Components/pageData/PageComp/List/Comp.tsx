import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { IPost } from "@/Components/pageData/PageContainer/ListContainer";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  data: IPost;
}

const Comp = ({ data }: IProps) => {
  const { isdesktop } = useBreakPoint();
  const ImgBaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  const [postimg, postsetimg] = useState<boolean>(false);

  return (
    <div>
      <Link href={`/post/${data?.id}`}>
        {data?.img &&
          data?.username &&
          (isdesktop ? (
            <div className="w-[100%] my-5 px-1">
              <div
                className={`border rounded-[1rem] hover:bg-gray-600 group  overflow-hidden `}
              >
                <img
                  src={
                    !postimg ? `${ImgBaseURL}/${data?.img}` : "/imgs/noimg.png"
                  }
                  className={`relative w-[100%] min-h-[10rem] max-h-[60rem] pointer-events-none group-hover:opacity-[0.8]`}
                  alt="postimg"
                  onError={() => {
                    postsetimg(true);
                  }}
                ></img>
              </div>
              <div className="flex gap-2 min-h-[3rem]">
                {data?.tag.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="my-2 p-1 w-fit border rounded bg-gray-100 text-[0.8rem]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="trancate font-bold">{data?.title}</div>
              <div className="trancate text-[0.9rem]">{data?.content}</div>
              <div className="flex items-center gap-3">
                <div className="w-[3rem] h-[3rem] rounded-[3rem] border gap-1 overflow-hidden">
                  <img
                    className="w-[100%] h-[100%]"
                    src={`${
                      data?.userimg !== undefined
                        ? `${ImgBaseURL}/${data?.userimg}`
                        : "/imgs/defaultuser.png"
                    }`}
                    alt="user"
                  ></img>
                </div>
                <div className="text-[0.8rem] font-bold">{data?.username}</div>
              </div>
            </div>
          ) : (
            <div
              className={`m-1 border rounded-[1rem]  overflow-hidden hover:bg-black group`}
            >
              <img
                src={
                  !postimg ? `${ImgBaseURL}/${data?.img}` : "/imgs/noimg.png"
                }
                className="relative rounded-[0.7rem]  w-[100%] min-h-[5rem] max-h-[60rem] pointer-events-none  group-hover:opacity-[0.8] "
                alt="postimg"
                onError={() => {
                  postsetimg(true);
                }}
              ></img>
            </div>
          ))}
      </Link>
    </div>
  );
};
export default Comp;
