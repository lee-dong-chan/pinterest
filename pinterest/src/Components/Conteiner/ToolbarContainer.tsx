import ToolbarComp from "../Comp/Toolbar/Toolbar";

import { IUser } from "./LayoutContainer";
interface IProps {
  login: string;
  userdata?: IUser;
}
const Toolbar = ({ login, userdata }: IProps): JSX.Element => {
  return <ToolbarComp login={login} userdata={userdata} />;
};

export default Toolbar;
