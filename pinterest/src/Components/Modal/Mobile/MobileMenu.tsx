import { MobileDrop, MobileDropType } from "@/Context/MobileDrop";
import { Logincheck } from "@/Context/usercheck";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { useRecoilValue, useSetRecoilState } from "recoil";

const MobileMenu = () => {
  const login = useRecoilValue(Logincheck);
  const MobileModal = useSetRecoilState(MobileDrop);
  const SetMobileType = useSetRecoilState(MobileDropType);
  const Mobile = useRecoilValue(MobileDrop);

  return (
    <div className="fixed h-[3rem] w-[100%] text-[0.8rem] flex justify-evenly items-center bottom-0 bg-white shadow">
      <Link href={"/list"}>
        <div className="flex flex-col items-center">
          <IoHome />
          <div>홈</div>
        </div>
      </Link>
      <div
        className="flex flex-col items-center"
        onClick={() => {
          MobileModal(!Mobile);
          SetMobileType("category");
        }}
      >
        <TbCategory />
        <div>카테고리</div>
      </div>
      {login === "true" ? (
        <Link href={"/write"}>
          <div className="flex flex-col items-center">
            <TfiWrite />
            <div>만들기</div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col items-center">
          <TfiWrite />
          <div>만들기</div>
        </div>
      )}
      <div
        className="flex flex-col items-center"
        onClick={() => {
          MobileModal(!Mobile);
          SetMobileType("search");
        }}
      >
        <FaSearch />
        <div>검색</div>
      </div>
    </div>
  );
};
export default MobileMenu;
