import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { Droponoff, Droptype } from "@/Context/DropDownModal";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface IProps {
  userdata?: IUser;
  logout: () => Promise<void>;
}
const DropComp = ({ userdata, logout }: IProps) => {
  const imgbaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  const { ismini, ismobile } = useBreakPoint();
  const Dropname = useRecoilValue(Droptype);
  const Drop = useRecoilValue(Droponoff);
  const setDroponoff = useSetRecoilState(Droponoff);
  console.log(Drop);
  return (
    <div className="p-3 text-[0.8rem]">
      {Dropname === "myinfo" && (
        <div>
          <div>현재 로그인 계정</div>
          <div className="p-2 flex items-center">
            <div>
              {userdata?.userimg == null ? (
                <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
                  <img
                    src="/imgs/defaultuser.png"
                    alt="defaultimg"
                    className="pointer-events-none"
                  ></img>
                </div>
              ) : (
                <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
                  <img
                    src={`${imgbaseURL}/${userdata.userimg}`}
                    alt="userimg"
                    className="pointer-events-none"
                  ></img>
                </div>
              )}
            </div>
            <div>{userdata?.username}</div>
          </div>
          <div
            className="text-[1.2rem] font-bold"
            onClick={() => {
              logout();
              setDroponoff(!Drop);
            }}
          >
            로그아웃
          </div>
        </div>
      )}
      {(ismini || ismobile) && Dropname === "not login toolbar" && (
        <div
          className="flex items-center justify-between text-[1.2rem] font-bold border-gray-400 hover:bg-gray-200 rounded"
          onClick={() => {
            setDroponoff(!Drop);
          }}
        >
          <Link href={"/list"}>
            <div className="hover:bg-gray-200">탐색</div>
          </Link>
          <FaAngleDown size={20} />
        </div>
      )}
      {(ismini || ismobile) && Dropname === "login toolbar" && (
        <div
          className=" justify-between text-[1.2rem] font-bold border-gray-400  rounded"
          onClick={() => {
            setDroponoff(!Drop);
          }}
        >
          <Link href={"/list"}>
            <div className="hover:bg-gray-200">홈</div>
          </Link>
          <Link href={"/write"}>
            <div className="hover:bg-gray-200">만들기</div>
          </Link>
        </div>
      )}
    </div>
  );
};
export default DropComp;
