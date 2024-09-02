import { useState } from "react";
import LoginComp from "../../ModalComponent/Comps/AccountComp/LoginComp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Ment from "../../ModalComponent/Comps/AccountComp/text";

const Login = (): JSX.Element => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [id, setid] = useState<string>();
  const [pw, setpw] = useState<string>();
  const queryclient = useQueryClient();

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
    onSuccess() {
      queryclient.invalidateQueries({ queryKey: ["logincheck"] });
    },
  });

  return (
    <div>
      <Ment />
      <LoginComp setid={setid} setpw={setpw} submit={mutate} />;
    </div>
  );
};
export default Login;
