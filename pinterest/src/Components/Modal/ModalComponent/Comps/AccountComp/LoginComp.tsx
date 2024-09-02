import { Middlebutton } from "@/Components/Button/Button";
import GoogleContainer from "@/Components/Conteiner/GoogleLoginContainer";
import { Modalonoff } from "@/Context/LoginModalSystem";
import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useSetRecoilState } from "recoil";

interface IProps {
  setid: Dispatch<SetStateAction<string | undefined>>;
  setpw: Dispatch<SetStateAction<string | undefined>>;
  submit: UseMutateFunction<any, Error, void, unknown>;
}

const LoginComp = ({ setid, setpw, submit }: IProps): JSX.Element => {
  const Modal = useSetRecoilState(Modalonoff);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <label className="w-[100%]">
        <div>이메일</div>
        <input
          className="px-3 mb-4 flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="이메일"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setid(e.target.value);
          }}
        ></input>
      </label>
      <label className="w-[100%]">
        <div>비밀번호</div>
        <input
          className="px-3  mb-4 flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="비밀번호"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setpw(e.target.value);
          }}
        ></input>
      </label>
      <div onClick={() => {}}>비밀번호를 잊으셧나요?</div>
      <div
        className="mb-4"
        onClick={() => {
          submit();
          Modal(false);
          window.location.replace("/list");
        }}
      >
        <Middlebutton text="로그인" back="bg-red-600" color="text-white" />
      </div>
      <div className="mb-4">또는</div>

      <GoogleContainer />
    </div>
  );
};
export default LoginComp;
