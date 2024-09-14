import { Smallbutton } from "@/Components/Button/Button";
import SearchContainer from "@/Components/Conteiner/SearchContainer";

import { Modalonoff, Modaltype } from "@/Context/LoginModalSystem";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { useSetRecoilState } from "recoil";

const Notlogin = (): JSX.Element => {
  const onoffModal = useSetRecoilState(Modalonoff);
  const ModalType = useSetRecoilState(Modaltype);
  const { isdesktop } = useBreakPoint();
  return (
    <div className="ms-4 flex items-center flex-1">
      <div className="me-5 w-[100%]">{isdesktop && <SearchContainer />}</div>
      <div className="flex me-4 gap-5">
        <div
          onClick={() => {
            onoffModal(true);
            ModalType("login");
          }}
        >
          <Smallbutton text="로그인" back="bg-red-500" color="text-white" />
        </div>
        <div
          onClick={() => {
            onoffModal(true);
            ModalType("regist");
          }}
        >
          <Smallbutton text="가입하기" back="bg-gray-300" color="text-black" />
        </div>
      </div>
    </div>
  );
};
export default Notlogin;
