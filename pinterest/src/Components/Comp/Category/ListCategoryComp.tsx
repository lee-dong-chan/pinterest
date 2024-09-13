import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { ICategory } from "@/components/pageData/PageContainer/WriteContainer";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  categorylist?: ICategory[];
  catelength: boolean;
  setcatelength: Dispatch<SetStateAction<boolean>>;
}

const CategoryComp = ({ categorylist, catelength, setcatelength }: IProps) => {
  const { isdesktop, ismobile, ismini } = useBreakPoint();
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
                  className="m-1 w-[100%] h-[5rem] border rounded-[1rem] flex items-center justify-center text-[1.2rem] text-white "
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
      {!catelength && (
        <div
          className="mx-auto my-5 p-3 w-fit border bg-gray-200 rounded-[0.5rem]"
          onClick={() => {
            setcatelength(true);
          }}
        >
          더보기
        </div>
      )}
    </div>
  );
};
export default CategoryComp;
