import { useRecoilValue } from "recoil";

import { Modaltype } from "@/Context/LoginModalSystem";
import Login from "../../ModalContainer/Account/login";
import Regist from "../../ModalContainer/Account/regist";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface IProps {
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<string, Error>>;
}

const Modal = ({ refetch }: IProps): JSX.Element => {
  const ModalType = useRecoilValue(Modaltype);
  return (
    <div className="px-2">
      {ModalType === "login" && <Login refetch={refetch} />}
      {ModalType === "regist" && <Regist />}
    </div>
  );
};
export default Modal;
