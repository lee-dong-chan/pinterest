"use client";
import PostListComp from "@/Components/Comp/List/PostListComp";
import { Observer } from "@/lib/observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchPageContainer = () => {
  const [cols, setcols] = useState<number>(4);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const search = useSearchParams();
  const searchname = search?.get("keyword");

  const fetchdata = useCallback(
    async (pageParam: number) => {
      const pagesize = 8;
      const { data } = await axios.get(
        `${baseURL}/list/?keyword=${searchname}&page=${pageParam}&limit=${pagesize}`
      );
      return data;
    },
    [searchname]
  );

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["searchlist"],
      queryFn: ({ pageParam }) => fetchdata(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastpage) => {
        return lastpage.hasmore ? +lastpage.page + 1 : undefined;
      },
    });
  console.log(data);
  const loadMore = useRef(null);
  useEffect(() => {
    Observer(hasNextPage, fetchNextPage, loadMore);
  }, [hasNextPage, fetchNextPage]);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[3rem] text-[1.5rem] font-bold">
        검색: {searchname}
      </div>
      <div className="text-center">
        pinterest에서 {searchname}에 관한 멋진 아이디어를 확인하고 영감을
        얻어보세요. 아이디어를 얻고 새로운 것을
        <br />
        시도해 보세요.
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
export default SearchPageContainer;
