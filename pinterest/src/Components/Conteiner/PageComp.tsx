"use client";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import HomeContainer from "@/pages/PageContainer/HomeContainer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PageContainer = () => {
  const { isdesktop } = useBreakPoint();
  const router = useRouter();
  useEffect(() => {
    if (!isdesktop) {
      router.replace("/list");
    }
  }, []);
  return <div>{isdesktop ? <HomeContainer /> : <div></div>}</div>;
};
export default PageContainer;
