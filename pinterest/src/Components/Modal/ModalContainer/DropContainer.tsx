import { IUser } from "@/components/Conteiner/LayoutContainer";
import DropComp from "../ModalComponent/Comps/DropComp/DropComp";
import axios from "axios";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { useRecoilValue } from "recoil";
import { Droptype } from "@/Context/DropDownModal";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface IProps {
  userdata?: IUser;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<string, Error>>;
}
const DropModalContainer = ({ userdata, refetch }: IProps) => {
  const Dropname = useRecoilValue(Droptype);
  const { ismini, isdesktop } = useBreakPoint();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  const logout = async () => {
    await axios.post(`${baseURL}/user/logout`, {}, { withCredentials: true });
    refetch();
  };

  return (
    <div>
      {Dropname == "myinfo" && userdata && (
        <div
          className={`fixed h-fit ${
            isdesktop ? "w-[15rem]" : ismini && "w-fit"
          }  bg-white right-1 top-[2.2rem] rounded-b-[1rem] shadow z-[50]`}
        >
          <DropComp userdata={userdata} logout={logout} />
        </div>
      )}

      {Dropname == "not login toolbar" && (
        <div
          className={`fixed h-fit w-[10rem] bg-white left-[10%] top-[4rem] rounded-[1rem] shadow`}
        >
          <DropComp userdata={userdata} logout={logout} />
        </div>
      )}

      {Dropname == "login toolbar" && (
        <div
          className={`fixed h-fit w-[10rem] bg-white left-[10%] top-[4rem] rounded-[1rem] shadow`}
        >
          <DropComp userdata={userdata} logout={logout} />
        </div>
      )}
    </div>
  );
};
export default DropModalContainer;
