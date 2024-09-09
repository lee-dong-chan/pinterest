import { Middlebutton } from "@/Components/Button/Button";
import { UseMutateFunction } from "@tanstack/react-query";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  setid: Dispatch<SetStateAction<string | undefined>>;
  setpw: Dispatch<SetStateAction<string | undefined>>;
  setdate: Dispatch<SetStateAction<string | undefined>>;
  submit: UseMutateFunction<any, Error, void, unknown>;
}

const RegistComp = ({ setid, setpw, setdate, submit }: IProps): JSX.Element => {
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
      <label className="w-[100%]">
        <div>생년월일</div>
        <input
          className="px-3  mb-4 flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="생년월일"
          type="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setdate(e.target.value);
          }}
        ></input>
      </label>
      <div
        className="mb-4"
        onClick={() => {
          submit();
          window.location.reload();
        }}
      >
        <Middlebutton text="계속하기" back="bg-red-600" color="text-white" />
      </div>
      <div className="mb-4">또는</div>
      <div className="mb-8">
        <img
          src="/imgs/google.png"
          className="absolute w-[2rem] mx-3 my-2 pointer-events-none"
          alt="google"
        ></img>
        <Middlebutton
          text="구글 계정으로 계속하기"
          back="white"
          color="text-black"
        />
      </div>
    </div>
  );
};
export default RegistComp;
