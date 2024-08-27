import { useRecoilValue } from "recoil";
import Ment from "../Comps/Account/text";
import { Modaltype } from "@/Context/ModalSystem";
import Login from "../../ModalContainer/Account/login";
import Regist from "../../ModalContainer/Account/regist";

const Accaunt = (): JSX.Element => {
  const ModalType = useRecoilValue(Modaltype);
  return (
    <div>
      <Ment />
      {ModalType === "login" && <Login />}
      {ModalType === "regist" && <Regist />}
    </div>
  );
};
export default Accaunt;
