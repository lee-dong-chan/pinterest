"use client";

import { useEffect, useState } from "react";
import ToolbarComp from "../Comp/Toolbar/Toolbar";

import { usePathname } from "next/navigation";
import { IUser } from "./BodyContainer";
interface IProps {
  login: string;
  userdata?: IUser;
}
const Toolbar = ({ login, userdata }: IProps): JSX.Element => {
  const [menu, setmenu] = useState<string>("");

  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      setmenu(pathname);
    }
  }, [pathname]);

  return <ToolbarComp menu={menu} login={login} userdata={userdata} />;
};

export default Toolbar;
