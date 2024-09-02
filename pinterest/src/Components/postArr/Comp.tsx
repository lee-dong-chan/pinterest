import { IPost } from "@/pages/PageContainer/ListContainer";

interface IProps {
  data: IPost;
}

const Comp = ({ data }: IProps) => {
  const ImgBaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  return (
    <div>
      {data?.img && data?.username && (
        <div className="w-[14rem] my-5">
          <img
            src={`${ImgBaseURL}/${data?.img}`}
            className="rounded-[0.7rem] border w-[100%]"
          ></img>
          <div className="flex gap-2">
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
            <div
              className="w-[3rem] h-[3rem] rounded-[3rem] border gap-1"
              style={{
                backgroundImage: `url(${ImgBaseURL}/${data?.userimg})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-[0.8rem] font-bold">{data?.username}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Comp;
