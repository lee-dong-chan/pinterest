"use client";

import Comp from "@/pages/PageComp/List/Comp";
import { IPost } from "@/pages/PageContainer/ListContainer";
import { InfiniteData } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface IProps {
  postlist: InfiniteData<any, unknown> | undefined;
}

const PostListComp = ({ postlist }: IProps) => {
  const [Elem, setElem] = useState<JSX.Element>(<div></div>);
  const pages = postlist?.pages;
  const data = pages?.map((item) => {
    return item.post;
  });
  const Arr: IPost[] = [];

  data?.forEach((item) => {
    Arr.push(...item);
  });

  useEffect(() => {
    setElem(
      <div className="px-[1rem]">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4, 1200: 5, 1600: 7 }}
        >
          <Masonry columnsCount={10}>
            {Arr.map((item: IPost) => (
              <Comp key={item.id} data={item} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
  }, [pages]);
  return Elem;
};
export default PostListComp;
