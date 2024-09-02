import { IUser } from "@/Components/Conteiner/LayoutContainer";
import DropModalContainer from "../ModalContainer/DropContainer";

interface IProps {
  userdata?: IUser;
}

const DropModalBox = ({ userdata }: IProps) => {
  return <DropModalContainer userdata={userdata} />;
};
export default DropModalBox;
