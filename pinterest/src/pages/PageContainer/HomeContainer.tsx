"use client";
import { useEffect, useState } from "react";
import HomeComp from "../PageComp/HomeComp/HomeComp";
import { useRecoilValue } from "recoil";
import { Logincheck } from "@/Context/usercheck";
import { useRouter } from "next/navigation";

const HomeContainer = () => {
  const [page, setCount] = useState<number>(1);
  const logincheck = useRecoilValue(Logincheck);
  const router = useRouter();
  useEffect(() => {
    if (page == 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === 2) {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    } else if (page === 3) {
      window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
    } else if (page === 4) {
      window.scrollTo({ top: window.innerHeight * 3, behavior: "smooth" });
    } else if (page === 5) {
      window.scrollTo({ top: window.innerHeight * 4, behavior: "smooth" });
    }
  }, [page]);
  useEffect(() => {
    if (logincheck == "true") {
      router.replace("/list");
    }
  }, [logincheck]);

  return <HomeComp setCount={setCount} page={page} />;
};

export default HomeContainer;
