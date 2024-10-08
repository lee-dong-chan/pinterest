"use client";
import { useState } from "react";
import LoginComp from "../../ModalComponent/Comps/AccountComp/LoginComp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Ment from "../../ModalComponent/Comps/AccountComp/text";
import { useSetRecoilState } from "recoil";
import { Modalonoff } from "@/Context/LoginModalSystem";
import { fetchLogincheck } from "@/Context/usercheck";

const Login = (): JSX.Element => {
  const fetchlogincheck = useSetRecoilState(fetchLogincheck);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [id, setid] = useState<string>();
  const [pw, setpw] = useState<string>();
  const [loginfail, setfail] = useState<boolean>(false);
  const Modal = useSetRecoilState(Modalonoff);
  const { mutate, data } = useMutation({
    mutationKey: ["loginAccount"],
    mutationFn: async () => {
      const { data } = await axios.post(
        `${baseURL}/user/login`,
        {
          email: id,
          password: pw,
        },
        { withCredentials: true }
      );
      return data;
    },
    onSuccess(data) {
      if (data.result == "login ok") {
        fetchlogincheck(true);
        Modal(false);
      } else {
        setfail(true);
      }
    },
  });

  return (
    <div>
      <Ment />
      <LoginComp
        setid={setid}
        setpw={setpw}
        submit={mutate}
        data={data}
        loginfail={loginfail}
      />
    </div>
  );
};
export default Login;
