"use client";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeContainer from "../pageData/HomeComp/HomeContainer";
import { useRecoilValue } from "recoil";
import { Logincheck } from "@/Context/usercheck";

const PageContainer = () => {
  const { isdesktop, ismini, ismobile } = useBreakPoint();
  const logcheck = useRecoilValue(Logincheck);
  const router = useRouter();
  useEffect(() => {
    const Mobi = /Mibi/i.test(window.navigator.userAgent);
    if (Mobi || ismini || ismobile) {
      router.replace("/list");
    }
  }, [isdesktop, ismini, ismobile]);
  useEffect(() => {
    if (logcheck == "true") {
      router.replace("/list");
    }
  }, [logcheck]);
  return <div>{isdesktop && <HomeContainer />}</div>;
};
export default PageContainer;
