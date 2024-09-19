import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { ICategory } from "@/Components/pageData/PageContainer/WriteContainer";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

interface IProps {
  categorylist?: ICategory[];
  catelength: boolean;
  setcatelength: Dispatch<SetStateAction<boolean>>;
}

const CategoryComp = ({ categorylist, catelength, setcatelength }: IProps) => {
  const { isdesktop, ismini } = useBreakPoint();
  return (
    <div className="px-7 max-w-[70rem] mx-auto">
      <div
        className={`p-2  ${!catelength ? "h-[11.5rem] overflow-hidden" : ""}`}
      >
        <div
          className={`${isdesktop && "mx-auto grid grid-cols-5 "} ${
            ismini && "mx-auto grid grid-cols-3"
          }`}
        >
          {categorylist?.map((item: ICategory, idx: number) => (
            <Link
              key={idx}
              href={`/categorylist/${item.id}?category=${item.name}`}
            >
              <div>
                <div
                  className={`m-1 w-[100%] h-[5rem] border rounded-[1rem] flex items-center justify-center text-white ${
                    isdesktop ? "text-[1.2rem]" : "text-[0.9rem]"
                  } `}
                  style={{
                    backgroundImage: `url(/imgs/category/${item.img}.png)`,
                    backgroundSize: "100% 100%",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {!catelength ? (
        <div
          className="mx-auto my-5 p-3 w-fit border bg-gray-200 rounded-[0.5rem]"
          onClick={() => {
            setcatelength(true);
          }}
        >
          더보기
        </div>
      ) : (
        <div
          className="mx-auto my-5 p-3 w-fit"
          onClick={() => {
            setcatelength(false);
          }}
        >
          <FaAngleDoubleUp />
        </div>
      )}
    </div>
  );
};
export default CategoryComp;
