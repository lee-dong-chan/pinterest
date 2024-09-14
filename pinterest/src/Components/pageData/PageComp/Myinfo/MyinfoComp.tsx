import MyImgComp from "@/Components/Modal/ModalComponent/Comps/UserImgComp/MyimgComp";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { ImgBaseURL } from "@/lib/Baseurls";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface Myinfo {
  name: string;
  img: string;
  post: { title: string; img: string; id: number }[];
  priview: string;
}

interface IProps {
  userdata: Myinfo;
  inputimg: (e: ChangeEvent<HTMLInputElement>) => void;
  onimg: boolean;
  setonimg: Dispatch<SetStateAction<boolean>>;
  priview: string;
  upload: () => Promise<void>;
  viewpost: boolean;
  setviewpost: Dispatch<SetStateAction<boolean>>;
}

const MyinfoComp = ({
  userdata,
  inputimg,
  onimg,
  setonimg,
  priview,
  upload,
  viewpost,
  setviewpost,
}: IProps) => {
  const { ismobile, ismini, isdesktop } = useBreakPoint();
  const [failuserimg, setfailuserimg] = useState<boolean>(false);
  const [failpostimg, setfailpostimg] = useState<number[]>([]);

  return (
    <div className="flex flex-col justify-center items-center">
      {userdata?.img == null ? (
        <img
          src="/imgs/defaultuser.png"
          className="h-[18rem] pointer-events-none"
          alt="defaultgimg"
        ></img>
      ) : (
        <div className="h-[15rem] w-[15rem] border rounded-[15rem] overflow-hidden">
          <img
            src={
              !failuserimg ? `${ImgBaseURL}/${userdata.img}` : "/imgs/noimg.png"
            }
            className=" w-[100%] h-[100%] pointer-events-none "
            alt="userimg"
            onError={() => {
              if (userdata) {
                setfailuserimg(true);
              }
            }}
          ></img>
        </div>
      )}
      <div className="text-[1.7rem] font-bold">{userdata?.name}</div>
      <div
        onClick={() => {
          setonimg(!onimg);
        }}
      >
        프로필 이미지 수정
      </div>
      {onimg && (
        <MyImgComp
          setonimg={setonimg}
          inputimg={inputimg}
          priview={priview}
          upload={upload}
        />
      )}

      <div
        className="mt-3 p-3 border rounded-[2rem] bg-gray-200"
        onClick={() => {
          setviewpost(!viewpost);
        }}
      >
        작성글
      </div>

      {viewpost && (
        <div
          className={`mt-5 mx-auto ${isdesktop && "grid grid-cols-4"} ${
            ismini && "grid grid-cols-3"
          } ${ismobile && "grid grid-cols-2"}`}
        >
          {userdata?.post &&
            userdata?.post.map(
              (
                item: { title: string; img: string; id: number },
                idx: number
              ) => (
                <Link key={idx} href={`/post/${item.id}`}>
                  <div className="m-1 flex flex-col items-center group hover:bg-black">
                    <img
                      src={
                        failpostimg.indexOf(item.id) === -1
                          ? `${ImgBaseURL}/${item.img}`
                          : "/imgs/noimg.png"
                      }
                      className="w-[10rem] h-[10rem]  border pointer-events-none group-hover:opacity-[0.8]"
                      alt="mypostimg"
                      onError={() => {
                        setfailpostimg([...failpostimg, item.id]);
                      }}
                    ></img>
                  </div>
                </Link>
              )
            )}
        </div>
      )}
    </div>
  );
};
export default MyinfoComp;
