"use client";

import { useEffect, useState } from "react";
import Toolbar from "./ToolbarContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import ModalContainer from "../Modal/ModalContainer/ModalContiner";
import { Modalonoff } from "@/Context/ModalSystem";
import { useRouter } from "next/navigation";

export interface IUser {
  userid: number;
  username: string;
  userimg?: string;
}

interface IProps {
  children: React.ReactNode;
}

const Body = ({ children }: IProps): JSX.Element => {
  const onoffModal = useRecoilValue(Modalonoff);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [login, setlogin] = useState<string>("false");
  const [userdata, setuserdata] = useState<IUser>();

  const logcheck = useQuery({
    queryKey: ["logincheck"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/logcheck`, {
        withCredentials: true,
      });
      return data;
    },
  });

  const { data } = useQuery({
    queryKey: ["userdata"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/userdata`, {
        withCredentials: true,
      });
      return data;
    },
  });

  console.log(login);

  const router = useRouter();
  useEffect(() => {
    setlogin(logcheck.data?.login);
    if (login) {
      router.push("/list");
    }
  }, [logcheck.data]);
  useEffect(() => {
    setuserdata(data);
  }, [data]);

  return (
    <div>
      <div>
        <Toolbar login={login} userdata={userdata} />
        {children}
      </div>
      {onoffModal && <ModalContainer />}
    </div>
  );
};

export default Body;
