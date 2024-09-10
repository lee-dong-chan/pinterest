import { useEffect, useState } from "react";
import RegistComp from "../../ModalComponent/Comps/AccountComp/RegistComp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Ment from "../../ModalComponent/Comps/AccountComp/text";
import { useSetRecoilState } from "recoil";
import { Modalonoff } from "@/Context/LoginModalSystem";

const Regist = (): JSX.Element => {
  const Modal = useSetRecoilState(Modalonoff);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [id, setid] = useState<string>("");
  const [pw, setpw] = useState<string>("");
  const [date, setdate] = useState<string>("");
  const [registfail, setfail] = useState<boolean>(false);

  const { mutate } = useMutation({
    mutationKey: ["registAccount"],
    mutationFn: async () => {
      if (id !== "fail" && pw !== "fail" && date !== "fail") {
        const { data } = await axios.post(`${baseURL}/user/regist`, {
          email: id,
          password: pw,
          birthdate: date,
        });
        return data;
      }
    },
    onSuccess(data) {
      if (data.result == "regist ok") {
        Modal(false);
      } else if (data.result == "regist error") {
        setfail(true);
      }
    },
  });

  return (
    <div>
      <Ment />
      <RegistComp
        setid={setid}
        setpw={setpw}
        setdate={setdate}
        submit={mutate}
        registfail={registfail}
        id={id}
        pw={pw}
        date={date}
      />
    </div>
  );
};
export default Regist;
