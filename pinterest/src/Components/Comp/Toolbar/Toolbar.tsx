import Link from "next/link";
import HomeToolbar from "./HomeToolbar";
import Notlogin from "./notlogin";
import Onlogin from "./onlogin";
import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { usePathname } from "next/navigation";

interface IProps {
  login: string;
  userdata?: IUser;
}

const ToolbarComp = ({ login, userdata }: IProps): JSX.Element => {
  const pathname = usePathname();
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        {login === "false" ? (
          <Link href={"/"}>
            <img
              src="/imgs/pinterest.png"
              className="h-[3.5rem] me-3 pointer-events-none"
              alt="logo"
            ></img>
          </Link>
        ) : (
          <img
            src="/imgs/pinterest.png"
            className="h-[3.5rem] me-3 pointer-events-none"
            alt="logo"
          ></img>
        )}
        <Link href={"/list"}>
          {pathname !== "/" && pathname !== "/write" ? (
            <div className="px-4 py-3 border rounded-[1.2rem] text-white bg-black">
              탐색
            </div>
          ) : (
            <div className="me-2">탐색</div>
          )}
        </Link>
        {login === "true" && (
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
      </div>
      {pathname === "/" && <HomeToolbar />}

      {pathname !== "/" &&
        (login == "true" ? <Onlogin userdata={userdata} /> : <Notlogin />)}
    </div>
  );
};
export default ToolbarComp;
