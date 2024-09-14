import { Middlebutton } from "@/Components/Button/Button";
import GoogleContainer from "@/Components/Conteiner/GoogleLoginContainer";
import { UseMutateFunction } from "@tanstack/react-query";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  setid: Dispatch<SetStateAction<string | undefined>>;
  setpw: Dispatch<SetStateAction<string | undefined>>;
  submit: UseMutateFunction<any, Error, void, unknown>;
  data: any;
  loginfail: boolean;
}

const LoginComp = ({
  setid,
  setpw,
  submit,
  data,
  loginfail,
}: IProps): JSX.Element => {
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
      <div className="p-1  flex items-center h-[1rem] w-[100%] text-[0.8rem] text-red-500">
        {data?.result === "not found email" &&
          "로그인실패!! 이메일을 확인하세요"}
        {data?.result === "not found password" &&
          "로그인실패!! 비밀번호를 확인하세요"}
      </div>
      <div
        className="mb-4 w-[100%]"
        onClick={() => {
          submit();
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
