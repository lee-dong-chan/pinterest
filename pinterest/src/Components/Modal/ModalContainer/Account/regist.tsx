import { useState } from "react";
import RegistComp from "../../ModalComponent/Comps/Account/RegistComp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Regist = (): JSX.Element => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [id, setid] = useState<string>();
  const [pw, setpw] = useState<string>();
  const [date, setdate] = useState<string>();

  const { mutate } = useMutation({
    mutationKey: ["registAccount"],
    mutationFn: async () => {
      const { data } = await axios.post(`${baseURL}/user/regist`, {
        email: id,
        password: pw,
        birthdate: date,
      });
      return data;
    },
    onError() {},
  });

  return (
    <RegistComp setid={setid} setpw={setpw} setdate={setdate} submit={mutate} />
  );
};
export default Regist;
