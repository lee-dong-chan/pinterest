"use client";

import Comp from "@/Components/pageData/PageComp/List/Comp";
import { IPost } from "@/Components/pageData/PageContainer/ListContainer";

import { InfiniteData } from "@tanstack/react-query";
import Masonry from "react-masonry-css";

interface IProps {
  postlist: InfiniteData<any, unknown> | undefined;
}

const PostListComp = ({ postlist }: IProps) => {
  const pages = postlist?.pages;
  const data = pages?.map((item) => {
    return item.post;
  });
  const Arr: IPost[] = [];

  data?.forEach((item) => {
    Arr.push(...item);
  });

  const breakpointColumnsObj = {
    default: 5,
    350: 2,
    750: 2,
    900: 3,
    1200: 4,
    1600: 5,
    1800: 6,
    2000: 7,
    2400: 8,
    2600: 9,
    2800: 10,
  };

  return (
    <div className="px-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid flex"
        columnClassName="my-masonry-grid_column"
      >
        {Arr?.map((item: IPost) => (
          <Comp key={item.id} data={item} />
        ))}
      </Masonry>
    </div>
  );
};
export default PostListComp;
