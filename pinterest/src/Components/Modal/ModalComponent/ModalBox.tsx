import { Modalonoff } from "@/Context/LoginModalSystem";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";

import { useBreakPoint } from "@/CustomHook/BreakPoint";
import Modal from "./Modals/Modal";

const ModalBox = (): JSX.Element => {
  const onoffModal = useSetRecoilState(Modalonoff);
  const { ismobile } = useBreakPoint();

  return (
    <div className="absolute  w-[100%] h-[100%] top-0 flex justify-center">
      <div
        className="fixed w-[100%] h-screen  bg-black opacity-[0.5] z-[100] "
        onClick={() => {
          onoffModal(false);
        }}
      ></div>
      <div
        className={`${
          ismobile ? "w-screen top-[3%]" : "w-[30rem] top-[8%]"
        } fixed h-fit bg-white rounded-[1.3rem] z-[100]  mx-auto`}
      >
        <div className="absolute w-[100%] flex justify-end ">
          <div
            className="p-3 me-[1rem]"
            onClick={() => {
              onoffModal(false);
            }}
          >
            <IoMdClose size={30} />
          </div>
        </div>

        <div className="mx-auto w-[20rem] flex flex-col items-center">
          <Modal />
        </div>
      </div>
    </div>
  );
};
export default ModalBox;
