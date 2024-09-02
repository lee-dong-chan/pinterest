import { useState } from "react";
import RegistComp from "../../ModalComponent/Comps/AccountComp/RegistComp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Ment from "../../ModalComponent/Comps/AccountComp/text";

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
    <div>
      <Ment />
      <RegistComp
        setid={setid}
        setpw={setpw}
        setdate={setdate}
        submit={mutate}
      />
    </div>
  );
};
export default Regist;
