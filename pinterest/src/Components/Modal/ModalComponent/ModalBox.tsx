import { Modalonoff } from "@/Context/ModalSystem";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import Accaunt from "./Modals/Account";

const ModalBox = (): JSX.Element => {
  const onoffModal = useSetRecoilState(Modalonoff);
  return (
    <div>
      <div className="absolute top-0  w-[100%] h-[100%] bg-black opacity-[0.5] z-[100] "></div>
      <div className="relative mx-auto  w-[30rem] h-fit bg-white rounded-[1.3rem] z-[100]">
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
          <Accaunt />
        </div>
      </div>
    </div>
  );
};
export default ModalBox;
