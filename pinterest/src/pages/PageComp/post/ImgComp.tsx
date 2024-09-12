import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { IPostData } from "@/pages/PageContainer/PostContainer";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

interface IProps {
  ImgBaseURL?: string;
  data?: IPostData;
}

const ImgComp = ({ ImgBaseURL, data }: IProps) => {
  const router = useRouter();
  const [img, setimg] = useState<boolean>(false);
  const { isdesktop } = useBreakPoint();

  useEffect(() => {
    router.refresh();
  }, [img]);
  return (
    <div
      className={
        isdesktop
          ? `m-3 w-[30rem]   min-h-[20rem]  max-h-[50rem] `
          : "px-2 w-screen min-w-[15rem] overflow-hidden "
      }
    >
      {data && (
        <img
          src={!img ? `${ImgBaseURL}/${data?.postimg}` : "/imgs/noimg.png"}
          className="w-[100%] h-[100%] rounded-[1rem]  pointer-events-none"
          alt="img"
          onError={() => {
            if (data?.postimg) {
              setimg(true);
            }
          }}
        ></img>
      )}
    </div>
  );
};
export default ImgComp;
