import Link from "next/link";
import HomeToolbar from "./HomeToolbar";
import Notlogin from "./notlogin";
import Onlogin from "./onlogin";
import { IUser } from "@/Components/Conteiner/BodyContainer";

interface IProps {
  menu: string;
  login: string;
  userdata?: IUser;
}

const ToolbarComp = ({ menu, login, userdata }: IProps): JSX.Element => {
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="flex items-center">
        <Link href={"/"}>
          <img src="/imgs/pinterest.png" className="h-[3.5rem] me-3"></img>
        </Link>
        <Link href={"/list"}>
          {menu !== "/" ? (
            <div className="px-4 py-3 border rounded-[1.2rem] text-white bg-black">
              탐색
            </div>
          ) : (
            <div>탐색</div>
          )}
        </Link>
      </div>
      {menu === "/" ? (
        <HomeToolbar />
      ) : login == "true" ? (
        <Onlogin userdata={userdata} />
      ) : (
        <Notlogin />
      )}
    </div>
  );
};
export default ToolbarComp;
