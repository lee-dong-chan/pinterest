import { useRecoilValue } from "recoil";

import { Modaltype } from "@/Context/LoginModalSystem";
import Login from "../../ModalContainer/Account/login";
import Regist from "../../ModalContainer/Account/regist";

const Modal = (): JSX.Element => {
  const ModalType = useRecoilValue(Modaltype);
  return (
    <div className="px-2">
      {ModalType === "login" && <Login />}
      {ModalType === "regist" && <Regist />}
    </div>
  );
};
export default Modal;
