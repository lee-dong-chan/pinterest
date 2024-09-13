import Link from "next/link";
import HomeToolbar from "./HomeToolbar";
import Notlogin from "./notlogin";
import Onlogin from "./onlogin";
import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { usePathname } from "next/navigation";

import { useBreakPoint } from "@/CustomHook/BreakPoint";

import { FaAngleDown } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Droponoff, Droptype } from "@/Context/DropDownModal";
import { useEffect } from "react";

interface IProps {
  login: string;
  userdata?: IUser;
}

const ToolbarComp = ({ login, userdata }: IProps): JSX.Element => {
  const pathname = usePathname();
  const { ismini, isdesktop, ismobile } = useBreakPoint();
  const Drop = useRecoilValue(Droponoff);
  const setDrop = useSetRecoilState(Droponoff);
  const setDroptype = useSetRecoilState(Droptype);

  useEffect(() => {
    if (ismini == false) {
      setDrop(false);
    }
  }, [ismini]);
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        {login === "false" ? (
          ismobile || ismini ? (
            <img
              src={"/minipin.png"}
              className={`${
                ismobile ? "h-[2rem]" : "h-[3.5rem]"
              } me-3 pointer-events-none`}
              alt="logo"
            ></img>
          ) : (
            isdesktop && (
              <Link href={"/"}>
                <img
                  src={"/pinterest.png"}
                  className={"h-[3.5rem] me-3 pointer-events-none"}
                  alt="logo"
                ></img>
              </Link>
            )
          )
        ) : (
          <img
            src={`${
              ismini
                ? "/minipin.png"
                : isdesktop
                ? "/pinterest.png"
                : ismobile && "/imgs/minipin.png"
            }`}
            className={`${
              ismobile ? "h-[2rem]" : "h-[3.5rem]"
            } me-3 pointer-events-none`}
            alt="logo"
          ></img>
        )}
        {isdesktop && (
          <Link href={"/list"}>
            {pathname !== "/" && pathname !== "/write" ? (
              <div className="px-4 py-3 border rounded-[1.2rem] text-white bg-black">
                탐색
              </div>
            ) : (
              <div className="me-2">탐색</div>
            )}
          </Link>
        )}
        {login === "true" && isdesktop && (
          <Link href={"/write"}>
            {pathname == "/write" ? (
              <div className="ms-2 px-4 py-3 border rounded-[1.2rem] text-white bg-black">
                만들기
              </div>
            ) : (
              <div className="ms-3">만들기</div>
            )}
          </Link>
        )}

        {ismini && login == "false" && (
          <div>
            <div
              className="px-4 py-2  text-[1.2rem]  rounded-[1rem]  bg-white  hover:bg-gray-200 flex items-center"
              onClick={() => {
                setDroptype("not login toolbar");
                setDrop(!Drop);
              }}
            >
              탐색
              <FaAngleDown size={20} />
            </div>
          </div>
        )}

        {ismini && login == "true" && (
          <div>
            <div
              className="px-4 py-2  text-[1.2rem]  rounded-[1rem]  bg-white  hover:bg-gray-200 flex items-center"
              onClick={() => {
                setDroptype("login toolbar");
                setDrop(!Drop);
              }}
            >
              홈
              <FaAngleDown size={20} />
            </div>
          </div>
        )}
      </div>

      {pathname === "/" && <HomeToolbar />}
      {pathname !== "/" &&
        (login == "true" ? <Onlogin userdata={userdata} /> : <Notlogin />)}
    </div>
  );
};
export default ToolbarComp;
