import { ICategory } from "@/pages/PageContainer/WriteContainer";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  categorylist?: ICategory[];
  catelength: boolean;
  setcatelength: Dispatch<SetStateAction<boolean>>;
}

const CategoryComp = ({ categorylist, catelength, setcatelength }: IProps) => {
  return (
    <div className="px-7 max-w-[70rem] mx-auto">
      <div
        className={`p-2  ${!catelength ? "h-[10.5rem] overflow-hidden" : ""}`}
      >
        <div className="flex flex-wrap max-w-[70rem] justify-center">
          {categorylist?.map((item: ICategory, idx: number) => (
            <Link
              key={idx}
              href={`/categorylist/${item.id}?category=${item.name}`}
            >
              <div>
                <div
                  className="w-[13rem] h-[5rem] border rounded-[1rem] flex items-center justify-center text-[1.2rem] text-white "
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
