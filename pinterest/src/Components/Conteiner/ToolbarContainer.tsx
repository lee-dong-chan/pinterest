import ToolbarComp from "@/Components/Comp/Toolbar/Toolbar";
import { IUser } from "./LayoutContainer";

interface IProps {
  login: string;
  userdata?: IUser;
}
const Toolbar = ({ login, userdata }: IProps): JSX.Element => {
  return (
    <div className="sticky w-screen top-0 bg-white z-[100]">
      <ToolbarComp login={login} userdata={userdata} />
    </div>
  );
};

export default Toolbar;
