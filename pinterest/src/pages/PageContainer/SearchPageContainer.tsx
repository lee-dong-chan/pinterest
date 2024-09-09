"use client";
import PostListComp from "@/Components/Comp/List/PostListComp";
import { Observer } from "@/lib/Observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SearchPageContainer = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const search = useSearchParams();
  const searchname = search?.get("keyword");

  const fetchdata = useCallback(
    async (pageParam: number) => {
      const pagesize = 10;
      const { data } = await axios.get(
        `${baseURL}/list/?keyword=${searchname}&page=${pageParam}&limit=${pagesize}`
      );
      return data;
    },
    [searchname]
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
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

  useEffect(() => {
    refetch();
  }, [searchname]);
  return (
    <div className="w-screen">
      <PostListComp postlist={data} />
      {isFetching && !isFetchingNextPage && (
        <p className="w-fit mx-auto">로딩중...</p>
      )}
      <div className="w-fit mx-auto" ref={loadMore}>
        <IoMdArrowDropdown size={30} />
      </div>
    </div>
  );
};
export default SearchPageContainer;
