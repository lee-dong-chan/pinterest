"use client";
import axios from "axios";
import MyinfoComp from "../PageComp/MyinfoComp";
import { useQuery } from "@tanstack/react-query";

import { useParams } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

const MyinfoContainer = () => {
  const [onimg, setonimg] = useState<boolean>(false);
  const [Img, setImg] = useState<File>();
  const [priview, setpriview] = useState<string>("");
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const params = useParams();

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
      const data = await axios.post(`${baseURL}/upload`, Formdata, {
        headers: { "Content-type": "multipart/form-data" },
      });

      await axios.patch(
        `${baseURL}/user/userimg/${params?.id}?img=${data.data.filename}`
      );
      refetch();
    }
  };

  return (
    <MyinfoComp
      userdata={data}
      inputimg={inputimg}
      onimg={onimg}
      setonimg={setonimg}
      priview={priview}
      upload={upload}
    />
  );
};
export default MyinfoContainer;
