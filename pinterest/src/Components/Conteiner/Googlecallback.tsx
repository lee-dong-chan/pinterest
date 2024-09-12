"use client";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../Comp/Loading/Loding";

const GoogleCallback = () => {
  const router = useRouter();
  const queryclient = useQueryClient();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const callBackUrl = process.env.NEXT_PUBLIC_GOOGLE_COLLBACK_URL;

  //구글 서버에서 받아온 1회용 코드
  let code: string | null;
  useEffect(() => {
    code = new URL(window.location.href).searchParams.get("code");
  }, []);

  //네이버 콜백시 서버에서 res를 받아오는 코드
  const Google = async (): Promise<void> => {
    //우리의 서버(express)로 보내기 (난 8001포트)
    await axios
      .post(
        `${baseURL}/GoogleCallback?code=${code}`, //서버로 보내는 데이터, 보디에 넣어 처리해도 되긴 함(서버 만드는 사람 마음대로 해도 됌)
        { callbackUrl: callBackUrl }, //서버에서 콜백 url이 필요해서 넣어줌
        {
          withCredentials: true, //쿠키, 증명서 이런거 받아오겠다.
        }
      )
      .then(() => {
        //성공시 콜백
        //성공시 URL
        router.push("/list");
        queryclient.invalidateQueries({ queryKey: ["logincheck"] });
      })
      .catch(() => {
        //실패시 URL
        //실패시 URL
        router.push("/");
      });
  };

  //컴포넌트 생성시 naver 실행
  useEffect(() => {
    Google();
  });

  return (
    <div>
      <Loading />
    </div>
  );
};

export default GoogleCallback;
