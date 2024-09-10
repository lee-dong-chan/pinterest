"use client";

import React, { use, useEffect, useRef } from "react";
import Toolbar from "./ToolbarContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ModalContainer from "../Modal/ModalContainer/AccountModalContiner";
import { Modalonoff } from "@/Context/LoginModalSystem";
import { usePathname, useRouter } from "next/navigation";

import { Logincheck, Userdata } from "@/Context/usercheck";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import MobileMenu from "../Modal/Mobile/MobileMenu";
import { Droponoff } from "@/Context/DropDownModal";
import { MobileDrop } from "@/Context/MobileDrop";
import MobileModalBox from "../Modal/Mobile/MoblieModalbox";
import DropModalContainer from "../Modal/ModalContainer/DropContainer";

export interface IUser {
  userid: number;
  username: string;
  userimg?: string;
}

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  const setDropModal = useSetRecoilState(Droponoff);
  const MobileModal = useSetRecoilState(MobileDrop);
  const setlogin = useSetRecoilState(Logincheck);
  const setuser = useSetRecoilState(Userdata);
  const onoffModal = useRecoilValue(Modalonoff);
  const userdata = useRecoilValue(Userdata);
  const login = useRecoilValue(Logincheck);
  const MobileDropon = useRecoilValue(MobileDrop);
  const onoffDrop = useRecoilValue(Droponoff);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const { ismobile } = useBreakPoint();
  const Path = usePathname();

  const logcheck = useQuery({
    queryKey: ["logincheck"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/logcheck`, {
        withCredentials: true,
      });
      const lastdata: string = data.login;
      setlogin(lastdata);
      return lastdata;
    },
    refetchInterval: 200000,
  });

  const { refetch, data } = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/userdata`, {
        withCredentials: true,
      });
      setuser(data);
      return data;
    },
  });

  useEffect(() => {
    if (Path == "/list") {
      router.refresh();
    }
    if (logcheck.data == "false") {
      router.refresh();
      refetch();
    } else {
      refetch();
    }
  }, [logcheck.data]);

  return (
    <div className="min-w-[270px] select-none">
      <div>
        <Toolbar login={login} userdata={userdata} />

        <div
          onClick={() => {
            setDropModal(false);
            MobileModal(false);
          }}
        >
          {children}
        </div>
        {onoffDrop && <DropModalContainer refetch={logcheck.refetch} />}
        {ismobile && <MobileMenu />}
        {onoffModal && <ModalContainer refetch={logcheck.refetch} />}
        {MobileDropon && ismobile && <MobileModalBox />}
      </div>
    </div>
  );
};

export default Layout;
