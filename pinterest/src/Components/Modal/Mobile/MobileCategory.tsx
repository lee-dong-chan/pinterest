import { MobileDrop } from "@/Context/MobileDrop";
import { ICategory } from "@/app/list/page";
import { BaseURL } from "@/lib/Baseurls";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

const MobileCategory = () => {
  const MobileDroptoggle = useSetRecoilState(MobileDrop);
  const { data } = useQuery({
    queryKey: ["Mobilecate"],
    queryFn: async () => {
      const { data } = await axios.get(`${BaseURL}/category`);
      const lastdata: ICategory[] = data;
      return lastdata;
    },
  });
  return (
    <div>
      <p className="mx-auto w-fit text-[1.2rem] font-bold ">카테고리</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {data?.map((item: ICategory, idx: number) => (
          <Link
            key={idx}
            href={`/categorylist/${item.id}?category=${item.name}`}
            onClick={() => {
              MobileDroptoggle(false);
            }}
          >
            <div className="px-1 py-2 w-[6.5rem] border rounded-[1rem]  bg-gray-100 text-[0.8rem] text-center ">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MobileCategory;
