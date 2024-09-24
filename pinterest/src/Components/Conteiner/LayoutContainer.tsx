"use client";

import React, { useEffect, useRef, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { Modalonoff } from "@/Context/LoginModalSystem";
import { usePathname, useRouter } from "next/navigation";

import {
  Logincheck,
  Userdata,
  fetchLogincheck,
  refetchuser,
} from "@/Context/usercheck";
import { useBreakPoint } from "@/CustomHook/BreakPoint";

import { Droponoff } from "@/Context/DropDownModal";
import { MobileDrop } from "@/Context/MobileDrop";
import Toolbar from "@/Components/Conteiner/ToolbarContainer";
import DropModalContainer from "@/Components/Modal/ModalContainer/DropContainer";
import MobileMenu from "@/Components/Modal/Mobile/MobileMenu";
import ModalContainer from "@/Components/Modal/ModalContainer/AccountModalContiner";
import MobileModalBox from "@/Components/Modal/Mobile/MoblieModalbox";

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
  const setrefetch = useSetRecoilState(refetchuser);
  const fetchlogin = useSetRecoilState(fetchLogincheck);
  const onoffModal = useRecoilValue(Modalonoff);
  const userdata = useRecoilValue(Userdata);
  const login = useRecoilValue(Logincheck);
  const MobileDropon = useRecoilValue(MobileDrop);
  const onoffDrop = useRecoilValue(Droponoff);
  const userrefetch = useRecoilValue(refetchuser);
  const loginfetch = useRecoilValue(fetchLogincheck);
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

  const { refetch } = useQuery({
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

  useEffect(() => {
    if (userrefetch == true) {
      refetch();
      setrefetch(false);
    }
  }, [userrefetch]);

  useEffect(() => {
    if (loginfetch == true) {
      logcheck.refetch();
      fetchlogin(false);
    }
  }, [loginfetch]);

  return (
    <div className="min-w-[270px] select-none">
      <Toolbar login={login} userdata={userdata} />
      <div
        onClick={() => {
          setDropModal(false);
          MobileModal(false);
        }}
      >
        {children}
      </div>
      {onoffDrop && (
        <DropModalContainer refetch={logcheck.refetch} userdata={userdata} />
      )}
      {ismobile && <MobileMenu />}
      {onoffModal && <ModalContainer />}
      {MobileDropon && ismobile && <MobileModalBox />}
    </div>
  );
};

export default Layout;
