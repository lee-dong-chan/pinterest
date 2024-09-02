"use client";

import React, { useEffect } from "react";
import Toolbar from "./ToolbarContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ModalContainer from "../Modal/ModalContainer/AccountModalContiner";
import { Modalonoff } from "@/Context/LoginModalSystem";
import { useRouter } from "next/navigation";
import DropModalBox from "../Modal/ModalComponent/DropModalBox";
import { Droponoff } from "@/Context/DropDownModal";
import { Logincheck, Userdata } from "@/Context/usercheck";

export interface IUser {
  userid: number;
  username: string;
  userimg?: string;
}

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps): JSX.Element => {
  const onoffModal = useRecoilValue(Modalonoff);
  const onoffDrop = useRecoilValue(Droponoff);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const setlogin = useSetRecoilState(Logincheck);
  const login = useRecoilValue(Logincheck);
  const setuser = useSetRecoilState(Userdata);
  const userdata = useRecoilValue(Userdata);
  const router = useRouter();
  const logcheck = useQuery({
    queryKey: ["logincheck"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/logcheck`, {
        withCredentials: true,
      });
      const lastdata: string = data.login;
      setlogin(lastdata);
      if (lastdata == "false") {
        router.push("/");
      }
      return data;
    },
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
    refetch();
  }, [logcheck.data]);

  return (
    <div>
      <div>
        <Toolbar login={login} userdata={userdata} />
        {children}
      </div>
      {onoffModal && <ModalContainer />}
      {onoffDrop && <DropModalBox userdata={userdata} />}
    </div>
  );
};

export default Layout;
