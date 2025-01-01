import { useBreakPoint } from "@/CustomHook/BreakPoint";
import Image from "next/image";
import { ChangeEvent } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
interface IProps {
  inputfile: (e: ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string;
  filesize: number;
}

const ImgComp = ({ inputfile, previewUrl, filesize }: IProps): JSX.Element => {
  const { isdesktop } = useBreakPoint();
  return (
    <div className="pt-[1rem]">
      <>
        <div
          className={
            isdesktop
              ? "w-[25rem] h-[27em] border border-gray-300 rounded-[2rem] bg-gray-200"
              : "mx-5 w-[screen] h-[27em] border border-gray-300 rounded-[2rem] bg-gray-200"
          }
        >
          <label htmlFor="imgupload" className="w-[100%] h-[100%] ">
            {!previewUrl ? (
              <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
                <FaCircleArrowUp size={30} />
                <p className="p-3">이미지를 선택하세요</p>
              </div>
            ) : (
              <Image
                src={previewUrl}
                alt="priviewImg"
                className="w-[100%] h-[100%] rounded-[2rem] pointer-events-none"
                width={100}
                height={100}
                priority={true}
                quality={75}
              ></Image>
            )}
          </label>
        </div>
        <input
          className="hidden"
          id="imgupload"
          name="postimg"
          type="file"
          accept="image/*"
          onChange={inputfile}
        />
        {filesize / 1000 > 3000 && (
          <div className="w-[100%] text-center text-red-500 text-[0.9rem]">
            업로드 가능한크기 3MB이상의 이미지입니다
          </div>
        )}
      </>
      {isdesktop && (
        <div>
          <hr className="my-7 border-gray-400"></hr>
          <div className="p-3 text-center border rounded-[1rem] bg-gray-200 font-bold">
            URL 에서 저장
          </div>
        </div>
      )}
    </div>
  );
};
export default ImgComp;
