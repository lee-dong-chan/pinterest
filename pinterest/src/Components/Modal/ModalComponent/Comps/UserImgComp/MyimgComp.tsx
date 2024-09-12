import { useBreakPoint } from "@/CustomHook/BreakPoint";
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
  const { ismobile, ismini, isdesktop } = useBreakPoint();
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div
        className={`fixed z-[10] top-[13%] border rounded-[0.5rem] bg-white ${
          isdesktop && "w-[30rem] h-[30rem]"
        }
 ${ismini && "p-10"}
 ${ismobile && "p-5"}
      
      `}
      >
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
                setonimg(false);
                router.refresh();
              }
            }}
          >
            프로필 이미지 변경
          </div>
        </div>
      </div>
      <div
        className="fixed top-0 bg-black opacity-[0.7] w-screen h-screen"
        onClick={() => {
          setonimg(false);
        }}
      ></div>
    </div>
  );
};

export default MyImgComp;
