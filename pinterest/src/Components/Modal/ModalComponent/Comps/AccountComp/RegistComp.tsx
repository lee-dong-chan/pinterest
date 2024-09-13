import { Middlebutton } from "@/components/Button/Button";
import { UseMutateFunction } from "@tanstack/react-query";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  setid: Dispatch<SetStateAction<string | undefined>>;
  setpw: Dispatch<SetStateAction<string | undefined>>;
  setdate: Dispatch<SetStateAction<string | undefined>>;
  submit: UseMutateFunction<any, Error, void, unknown>;
  registfail: boolean;
  id: string;
  pw: string;
  date: string;
}

const RegistComp = ({
  setid,
  setpw,
  setdate,
  submit,
  registfail,
  id,
  pw,
  date,
}: IProps): JSX.Element => {
  const emailReg = /^[a-z0-9가-힣]+@[a-z]+\.[a-z]{2,3}$/;
  const pwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/;

  return (
    <div className="flex flex-col items-center">
      <label className="w-[100%]">
        <div>이메일</div>
        <input
          className="px-3  flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="이메일"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (emailReg.test(e.target.value) && e.target.value !== "") {
              setid(e.target.value);
            } else {
              setid("fail");
            }
          }}
        ></input>
        <div className=" w-[100%] h-[1rem] text-[0.8rem] text-red-500 ">
          {id === "fail" && "이메일 형식에 맞추어 입력해 주세요"}
        </div>
      </label>
      <label className="w-[100%]">
        <div>비밀번호</div>
        <input
          className="px-3  flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="비밀번호"
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (pwReg.test(e.target.value) && e.target.value !== "") {
              setpw(e.target.value);
            } else {
              setpw("fail");
            }
          }}
        ></input>
        <div className=" w-[100%] h-[1rem] text-[0.8rem] text-red-500 ">
          {pw === "fail" && "비밀번호는 8글자 이상, 30글자 이하로 작성하세요"}
        </div>
      </label>
      <label className="w-[100%]">
        <div>생년월일</div>
        <input
          className="px-3  mb-4 flex w-[100%] h-[3rem] border border-gray-400 rounded-[1rem]"
          placeholder="생년월일"
          type="date"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value !== "") {
              setdate(e.target.value);
            } else {
              setdate("fail");
            }
          }}
        ></input>
        <div className=" w-[100%] h-[1rem] text-[0.8rem] text-red-500 ">
          {date === "fail" && "생년월일을 입력해주세요!"}
        </div>
      </label>
      <div className="w-[100%] h-[1rem] text-[0.8rem] text-red-500 flex items-center">
        {registfail ? "회원가입실패!! 입력값을 수정해 주세요!" : ""}
      </div>
      <div
        className="mb-4 w-[100%]"
        onClick={() => {
          submit();
        }}
      >
        <Middlebutton text="계속하기" back="bg-red-600" color="text-white" />
      </div>
      <div className="mb-4">또는</div>
      <div className="mb-8 w-[100%]">
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
