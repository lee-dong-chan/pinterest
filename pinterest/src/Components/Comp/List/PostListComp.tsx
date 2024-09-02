import ListComp from "@/Components/postArr/ListComp";
import { InfiniteData } from "@tanstack/react-query";

interface IProps {
  postlist: InfiniteData<any, unknown> | undefined;
  cols: number;
}

const PostListComp = ({ postlist, cols }: IProps) => {
  const pages = postlist?.pages;
  const data = pages?.map((item) => {
    return item.post;
  });

  return (
    <div className="flex justify-center ">
      <ListComp data={data} cols={cols} />
    </div>
  );
};
export default PostListComp;
