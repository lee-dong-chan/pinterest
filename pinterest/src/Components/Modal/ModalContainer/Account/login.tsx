import { useState } from "react";
import LoginComp from "../../ModalComponent/Comps/Account/LoginComp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Login = (): JSX.Element => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [id, setid] = useState<string>();
  const [pw, setpw] = useState<string>();

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
  });

  return <LoginComp setid={setid} setpw={setpw} submit={mutate} />;
};
export default Login;
