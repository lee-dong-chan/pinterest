import MyImgComp from "@/Components/Modal/ModalComponent/Comps/UserImgComp/MyimgComp";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Myinfo {
  name: string;
  img: string;
  post: { title: string; img: string }[];
  priview: string;
}

interface IProps {
  userdata: Myinfo;
  inputimg: (e: ChangeEvent<HTMLInputElement>) => void;
  onimg: boolean;
  setonimg: Dispatch<SetStateAction<boolean>>;
  priview: string;

  upload: () => Promise<void>;
}

const MyinfoComp = ({
  userdata,
  inputimg,
  onimg,
  setonimg,
  priview,
  upload,
}: IProps) => {
  const imgbaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
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
            src={`${imgbaseURL}/${userdata.img}`}
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
    </div>
  );
};
export default MyinfoComp;
