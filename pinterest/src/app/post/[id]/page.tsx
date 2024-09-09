import PostContainer from "@/pages/PageContainer/PostContainer";
import axios from "axios";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export interface IPostData {
  id: number;
  title: string;
  postimg: string;
  content: string;
  tag: string[];
  categoryname: string;
  postuser: string;
  postuserimg: string;
  comment: {
    user: string;
    img: string;
    content: string;
  }[];
}

const Post = async (searchParams: {
  params: { id: number };
  searchParams: {};
}) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { id } = searchParams.params;
  const { data } = await axios.get(`${baseURL}/getpost/${id}`);

  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex items-center text-[0.8rem]">
        <Link href={"/list"}>
          <div className="p-1 border rounded-[0.8rem] bg-gray-200 ">탐색</div>
        </Link>
        <div className="px-2">
          <FaChevronLeft />
        </div>
        <div>{data?.categoryname}</div>
      </div>
      <PostContainer data={data} />
    </div>
  );
};
export default Post;
