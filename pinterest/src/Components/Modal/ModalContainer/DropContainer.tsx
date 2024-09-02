import { IUser } from "@/Components/Conteiner/LayoutContainer";
import DropComp from "../ModalComponent/Comps/DropComp/DropComp";
import axios from "axios";

interface IProps {
  userdata?: IUser;
}
const DropModalContainer = ({ userdata }: IProps) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const logout = async () => {
    await axios.post(`${baseURL}/user/logout`, {}, { withCredentials: true });
  };

  return (
    <div className="absolute h-fit w-[15rem] bg-white right-3 top-[5rem] rounded-[1rem] shadow">
      <DropComp userdata={userdata} logout={logout} />
    </div>
  );
};
export default DropModalContainer;
