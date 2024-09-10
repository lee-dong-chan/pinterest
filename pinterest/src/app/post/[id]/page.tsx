import { useBreakPoint } from "@/CustomHook/BreakPoint";
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
    <div className="my-10 flex flex-col items-center">
      <PostContainer data={data} />
    </div>
  );
};
export default Post;
