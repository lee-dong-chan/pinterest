"use client";
import CategoryComp from "@/Components/Comp/Category/ListCategoryComp";
import PostListComp from "@/Components/Comp/List/PostListComp";
import { ICategory } from "@/app/list/page";
import { Observer } from "@/lib/observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export interface IPost {
  id: number;
  img: string;
  title: string;
  content: string;
  tag: string[];
  username: string;
  userimg: string;
}

interface IProps {
  categorylist: ICategory[];
}
const ListContainer = ({ categorylist }: IProps): JSX.Element => {
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [catelength, setcatelength] = useState<boolean>(false);
  const [cols, setcols] = useState<number>(4);
  const fetchlist = async (pageParam: number) => {
    const pagesize = 8;
    const { data } = await axios.get(
      `${BaseUrl}/list?page=${pageParam}&limit=${pagesize}`
    );
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["videoList"],
      queryFn: ({ pageParam }) => fetchlist(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastpage) => {
        return lastpage.hasmore ? +lastpage.page + 1 : undefined;
      },
    });
  const loadmore = useRef(null);

  useEffect(() => {
    Observer(hasNextPage, fetchNextPage, loadmore);
  }, [hasNextPage, fetchNextPage]);

  return (
    <div>
      <CategoryComp
        categorylist={categorylist}
        catelength={catelength}
        setcatelength={setcatelength}
      />
      <div className="p-10 mx-auto w-fit ">인기아이디어 탐색하기</div>
      <PostListComp postlist={data} cols={cols} />

      {isFetching && !isFetchingNextPage && (
        <p className="w-fit mx-auto">로딩중...</p>
      )}
      <div className="w-fit mx-auto" ref={loadmore}>
        <IoMdArrowDropdown size={30} />
      </div>
    </div>
  );
};
export default ListContainer;
