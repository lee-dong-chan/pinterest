"use client";

import { Debounce } from "@/CustomHook/Debounce";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { Logincheck, Userdata } from "@/Context/usercheck";
import { useRouter } from "next/navigation";
import WriteComp from "@/Components/pageData/PageComp/Write/WriteComp";
import { BaseURL } from "@/lib/Baseurls";

export interface Itag {
  id: number;
  name: string;
}
export interface ISelecttag {
  id?: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  img: string;
}
const WriteContainer = (): JSX.Element => {
  const [filesize, setfilesize] = useState<number>(0);
  const [previewUrl, setpreviewUrl] = useState<string>("");
  const [Img, setImg] = useState<File>();
  const [title, settitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");
  const [tag, settag] = useState<string>("");
  const [tagdata, setdata] = useState<Itag[]>([]);
  const [selecttag, setselecttag] = useState<ISelecttag[]>([]);
  const [category, setcategory] = useState<ICategory[]>([]);
  const [selectcate, setselctcate] = useState<ICategory>({
    id: 0,
    name: "",
    img: "",
  });
  const [fail, setfail] = useState<boolean>(false);
  const [uploadEnd, setuploadEnd] = useState<boolean>(true);
  const [uploadstate, setuploadstate] = useState<boolean>(true);
  const router = useRouter();
  const user = useRecoilValue(Userdata);
  const login = useRecoilValue(Logincheck);

  const inputFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const File = e.target.files[0];
      if (File !== undefined) {
        setfilesize(File.size);
        const priview = URL.createObjectURL(File);
        setpreviewUrl(priview);
      }
      setImg(File);
    }
  };

  const Formdata = new FormData();
  if (Img !== undefined) {
    Formdata.append("File", Img);
  }

  useQuery({
    queryKey: ["category data"],
    queryFn: async () => {
      const { data } = await axios.get(`${BaseURL}/category`, {
        withCredentials: true,
      });
      const lastdata: ICategory[] = data;
      setcategory(lastdata);
      return lastdata;
    },
  });

  const search = Debounce(tag, 1000);

  const { refetch } = useQuery({
    queryKey: ["tagdata"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BaseURL}/searchtag?keyword=${search}`,
        { withCredentials: true }
      );
      setdata(data);
      return data;
    },
  });

  const entertag = () => {
    if (tag !== "") setselecttag([...selecttag, { name: tag }]);
  };
  const clicktag = (id: number, name: string) => {
    setselecttag([...selecttag, { id: id, name: name }]);
  };

  const filtertags = selecttag.filter((item, idx) => {
    return (
      selecttag.findIndex((tag) => {
        return item.name == tag.name;
      }) === idx
    );
  });

  const { mutate } = useMutation({
    mutationKey: ["uploadpost"],
    mutationFn: async () => {
      if (login == "true") {
        if (Img !== undefined && title !== "" && selectcate.id !== 0) {
          setuploadEnd(false);
          const { data } = await axios.post(`${BaseURL}/upload`, Formdata);
          const imgname: string = data.filename;
          await axios.post(`${BaseURL}/post/write`, {
            title: title,
            content: content,
            postimg: imgname,
            tags: filtertags,
            categoryid: selectcate.id,
            userid: user.userid,
          });
          return imgname;
        }
      }
    },
    onSuccess(imgname) {
      if (imgname) {
        setuploadEnd(true);
        router.replace("/list");
      } else {
        setuploadstate(false);
      }
    },
    onError() {
      setuploadEnd(true);
      setuploadstate(false);
    },
  });

  useEffect(() => {
    refetch();
  }, [search]);

  useEffect(() => {
    if (login == "false") {
      router.back();
    }
  }, [login]);

  useEffect(() => {
    if (Img !== undefined && title !== "" && selectcate.id !== 0) {
      setfail(false);
    } else {
      setfail(true);
    }
  }, [Img, title, selectcate]);

  return (
    <WriteComp
      filesize={filesize}
      uploadstate={uploadstate}
      uploadEnd={uploadEnd}
      fail={fail}
      inputfile={inputFile}
      upload={mutate}
      previewUrl={previewUrl}
      settag={settag}
      tagdata={tagdata}
      entertag={entertag}
      clicktag={clicktag}
      select={filtertags}
      setslelect={setselecttag}
      tag={tag}
      settitle={settitle}
      setcontent={setcontent}
      categorydata={category}
      setselctcate={setselctcate}
      selectcate={selectcate}
    />
  );
};

export default WriteContainer;
