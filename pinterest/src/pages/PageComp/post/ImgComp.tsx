import { IPostData } from "@/app/post/[id]/page";

interface IProps {
  ImgBaseURL?: string;
  data?: IPostData;
}

const ImgComp = ({ ImgBaseURL, data }: IProps) => {
  return (
    <div className="m-3 w-[30rem]   min-h-[20rem]  max-h-[50rem]  rounded-[1rem]">
      <img
        src={`${ImgBaseURL}/${data?.postimg}`}
        className="w-[100%] h-[100%] rounded-[1rem] pointer-events-none"
        alt="img"
      ></img>
    </div>
  );
};
export default ImgComp;
