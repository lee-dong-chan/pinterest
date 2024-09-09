"use client";

import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { Observer } from "@/lib/Observer";
import { IoMdArrowDropdown } from "react-icons/io";
import PostListComp from "@/Components/Comp/List/PostListComp";
import Link from "next/link";

const CategoryPageContainer = () => {
  const searchparams = useSearchParams();
  const catename = searchparams?.get("category");
  const category = useParams();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [cols, setcols] = useState<number>(5);
  const fetchdata = async (pageParam: number) => {
    const pagesize = cols * 2;
    const { data } = await axios.get(
      `${baseURL}/list/${category?.id}?page=${pageParam}&limit=${pagesize}`
    );
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["categorylist"],
      queryFn: ({ pageParam }) => fetchdata(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastpage) => {
        return lastpage.hasmore ? +lastpage.page + 1 : undefined;
      },
    });
  const loadMore = useRef(null);

  useEffect(() => {
    Observer(hasNextPage, fetchNextPage, loadMore);
  }, [hasNextPage, fetchNextPage]);
  console.log(data);
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <Link href={"/list"}>
          <div className="p-1 text-[0.8rem] border bg-gray-200 rounded-[0.8rem]">
            탐색
          </div>
        </Link>
        <div className="p-5 text-[1.5rem] font-bold">카테고리: {catename}</div>
        <div className="text-center">
          pinterest에서 {catename}에 관한 멋진 아이디어를 확인하고 영감을
          얻어보세요. 아이디어를 얻고 새로운 것을
          <br />
          시도해 보세요.
        </div>
      </div>
      <div className="my-5">
        <PostListComp postlist={data} cols={cols} />
        {isFetching && !isFetchingNextPage && (
          <p className="w-fit mx-auto">로딩중...</p>
        )}
        <div className="w-fit mx-auto" ref={loadMore}>
          <IoMdArrowDropdown size={30} />
        </div>
      </div>
    </div>
  );
};
export default CategoryPageContainer;
