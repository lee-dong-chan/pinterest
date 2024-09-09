import { useRouter } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
interface IProps {
  setonimg: Dispatch<SetStateAction<boolean>>;
  inputimg: (e: ChangeEvent<HTMLInputElement>) => void;
  priview: string;
  upload: () => Promise<void>;
}

const MyImgComp = ({
  setonimg,
  inputimg,
  priview,
  upload,
}: IProps): JSX.Element => {
  const router = useRouter();
  return (
    <div className="absolute top-[15%] w-[30rem] h-[30rem] border rounded-[0.5rem] bg-white">
      <div
        className="flex justify-end"
        onClick={() => {
          setonimg(false);
        }}
      >
        <IoMdClose size={30} />
      </div>
      <div className="flex flex-1 justify-center">
        <div className="h-[15rem] w-[15rem] rounded-[10rem] bg-gray-200 flex items-center justify-center">
          <label
            htmlFor="userimg"
            className="absolute z-10 h-[10rem] w-[10rem]"
          ></label>
          {!priview ? (
            <div className="font-bold">이미지를 선택하세요</div>
          ) : (
            <img
              className="h-[15rem] w-[15rem] rounded-[10rem] border"
              src={priview}
              alt="priview"
            ></img>
          )}
        </div>
      </div>
      <input
        type="file"
        id="userimg"
        onChange={inputimg}
        className="hidden"
      ></input>
      <div>
        <div
          className="mx-auto mt-20 flex items-center justify-center w-[15rem] h-[5rem] border rounded-[1rem] text-white bg-red-500"
          onClick={() => {
            if (priview) {
              upload();
              router.refresh();
            }
          }}
        >
          프로필 이미지 변경
        </div>
      </div>
    </div>
  );
};

export default MyImgComp;
