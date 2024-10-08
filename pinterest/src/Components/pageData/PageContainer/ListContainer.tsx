"use client";
import CategoryComp from "@/Components/Comp/Category/ListCategoryComp";
import PostListComp from "@/Components/Comp/List/PostListComp";

import { Logincheck } from "@/Context/usercheck";
import { useBreakPoint } from "@/CustomHook/BreakPoint";

import { Observer } from "@/lib/Observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRecoilValue } from "recoil";

export interface IPost {
  id: number;
  img: string;
  title: string;
  content: string;
  tag: string[];
  username: string;
  userimg: string;
}

export interface ICategory {
  id: number;
  name: string;
  img: string;
}

const ListContainer = (): JSX.Element => {
  const router = useRouter();
  const { ismobile } = useBreakPoint();
  const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [catelength, setcatelength] = useState<boolean>(false);

  const catelist = useQuery({
    queryKey: ["catelist"],
    queryFn: async () => {
      const { data } = await axios.get(`${BaseUrl}/category`);
      const lastdata: ICategory[] = data;
      return lastdata;
    },
  });

  const fetchlist = async (pageParam: number) => {
    const pagesize = 14;
    const { data } = await axios.get(
      `${BaseUrl}/list?page=${pageParam}&limit=${pagesize}`
    );
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["mainList"],
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

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div>
      {!ismobile && (
        <div>
          <div>
            <div className="mx-auto my-10 w-fit text-[1.7rem] font-bold">
              pinterest 최고의 아이디어 탐색하기
            </div>
            <div className="p-10 mx-auto w-fit font-bold ">관심사 발견하기</div>
            <CategoryComp
              categorylist={catelist.data}
              catelength={catelength}
              setcatelength={setcatelength}
            />
            <div className="p-10 mx-auto w-fit ">인기아이디어 탐색하기</div>
          </div>
        </div>
      )}
      <PostListComp postlist={data} />
      {!isFetching && !isFetchingNextPage && <p className="w-fit mx-auto"></p>}
      <div className="w-fit mx-auto" ref={loadmore}>
        <IoMdArrowDropdown size={30} />
      </div>
    </div>
  );
};
export default ListContainer;
