import MyImgComp from "@/Components/Modal/ModalComponent/Comps/UserImgComp/MyimgComp";
import { ImgBaseURL } from "@/lib/Baseurls";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
            src={`${ImgBaseURL}/${userdata.img}`}
            className=" w-[100%] h-[100%] pointer-events-none "
            alt="userimg"
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
        <div className="mt-5 flex grid grid-cols-5 gap-4">
          {userdata?.post.map(
            (item: { title: string; img: string; id: number }, idx: number) => (
              <Link href={`/post/${item.id}`}>
                <div className="flex flex-col items-center">
                  <img
                    src={`${ImgBaseURL}/${item.img}`}
                    className="w-[10rem] h-[10rem] rounded-[15rem] border pointer-events-none"
                    alt="mypostimg"
                  ></img>
                  <div className="p-2 w-[10rem] text-center text-[1.2rem] fontbold truncate ">
                    {item.title}
                  </div>
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
