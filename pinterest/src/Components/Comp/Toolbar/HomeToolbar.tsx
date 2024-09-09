import { Smallbutton } from "@/Components/Button/Button";
import { Modalonoff, Modaltype } from "@/Context/LoginModalSystem";
import { useSetRecoilState } from "recoil";

const HomeToolbar = (): JSX.Element => {
  const onoffModal = useSetRecoilState(Modalonoff);
  const ModalType = useSetRecoilState(Modaltype);
  return (
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
  );
};
export default HomeToolbar;
