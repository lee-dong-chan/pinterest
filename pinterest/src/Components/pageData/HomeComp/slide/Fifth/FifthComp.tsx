import Login from "@/Components/Modal/ModalContainer/Account/login";
import { Dispatch, SetStateAction } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
}

const FifthComp = ({ setCount }: IProps) => {
  return (
    <div className="h-[100%]  flex justify-center items-center ">
      <div className="w-[50%]  flex flex-col items-center justify-center">
        <p className="w-[24rem] text-[4rem] text-wrap text-white font-bold relative z-[20]">
          가입하여 더 많은 아이디어를 만나보세요
        </p>
      </div>
      <div className="w-[50%] flex justify-center">
        <div className="p-10 relative h-[53rem] w-[27rem] border rounded-[3rem] bg-white z-[20]">
          <Login />
        </div>
      </div>
      <div className="absolute w-[100%] h-[100%] bg-black opacity-[0.3] z-[10]"></div>
      <div
        className="absolute bottom-[-170rem] flex justify-center animate-bounce z-[20]"
        onClick={() => {
          setCount(1);
        }}
      >
        <div
          className={`h-[4rem] w-[4rem] rounded-[5rem] flex items-center justify-center bg-lime-500 
        `}
        >
          <RiArrowDropUpLine size={80} color="white" />
        </div>
      </div>
    </div>
  );
};
export default FifthComp;
