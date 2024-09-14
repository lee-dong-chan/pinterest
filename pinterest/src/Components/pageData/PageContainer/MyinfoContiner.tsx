"use client";
import axios from "axios";
import MyinfoComp from "../PageComp/Myinfo/MyinfoComp";
import { useQuery } from "@tanstack/react-query";

import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Logincheck, refetchuser } from "@/Context/usercheck";

const MyinfoContainer = () => {
  const [onimg, setonimg] = useState<boolean>(false);
  const [Img, setImg] = useState<File>();
  const [priview, setpriview] = useState<string>("");
  const [viewpost, setviewpost] = useState<boolean>(false);
  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const params = useParams();
  const logcheck = useRecoilValue(Logincheck);
  const setrefetch = useSetRecoilState(refetchuser);
  const { data, refetch } = useQuery({
    queryKey: ["infouser"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseURL}/myinfo/${params?.id}`, {
        withCredentials: true,
      });
      return data;
    },
  });

  const inputimg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const File = e.target.files[0];
      setImg(File);
      const priviewUrl = URL.createObjectURL(File);
      setpriview(priviewUrl);
    }
  }, []);

  const Formdata = new FormData();
  if (Img !== undefined) {
    Formdata.append("File", Img);
  }
  const upload = async () => {
    if (Img !== undefined) {
      const data = await axios.post(`${baseURL}/upload`, Formdata);

      await axios.patch(
        `${baseURL}/user/userimg/${params?.id}?img=${data.data.filename}`
      );
      refetch();
    }
  };
  useEffect(() => {
    setrefetch(true);
  }, [data]);

  useEffect(() => {
    if (logcheck == "false") {
      router.back();
    }
  }, [logcheck]);

  return (
    <MyinfoComp
      userdata={data}
      inputimg={inputimg}
      onimg={onimg}
      setonimg={setonimg}
      priview={priview}
      upload={upload}
      viewpost={viewpost}
      setviewpost={setviewpost}
    />
  );
};

export default MyinfoContainer;
