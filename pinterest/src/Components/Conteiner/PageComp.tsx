"use client";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomeContainer from "../pageData/HomeComp/HomeContainer";

const PageContainer = () => {
  const { isdesktop, ismini, ismobile } = useBreakPoint();
  const router = useRouter();
  useEffect(() => {
    const Mobi = /Mibi/i.test(window.navigator.userAgent);
    if (Mobi || ismini || ismobile) {
      router.replace("/list");
    }
  }, [isdesktop, ismini, ismobile]);
  return <div>{isdesktop && <HomeContainer />}</div>;
};
export default PageContainer;
