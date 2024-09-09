import { Modalonoff } from "@/Context/LoginModalSystem";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import Modal from "./Modals/Modal";

const ModalBox = (): JSX.Element => {
  const onoffModal = useSetRecoilState(Modalonoff);
  return (
    <div className="absolute  w-[100%] h-[100%] top-0">
      <div className="fixed w-[100%] h-screen  bg-black opacity-[0.5] z-[100] "></div>
      <div className="fixed w-[30rem] h-fit bg-white rounded-[1.3rem] z-[100] top-[15%] left-[35%]">
        <div className="absolute ">
          <div
            className="p-3 mx-[26rem]"
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
