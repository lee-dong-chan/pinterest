import { IUser } from "@/Components/Conteiner/LayoutContainer";
import DropModalContainer from "../ModalContainer/DropContainer";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface IProps {
  userdata?: IUser;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<string, Error>>;
}

const DropModalBox = ({ userdata, refetch }: IProps) => {
  return <DropModalContainer userdata={userdata} refetch={refetch} />;
};
export default DropModalBox;
