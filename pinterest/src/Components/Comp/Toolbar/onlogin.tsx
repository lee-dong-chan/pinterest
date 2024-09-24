import { IoIosArrowDropdown } from "react-icons/io";

import SearchContainer from "@/Components/Conteiner/SearchContainer";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Droponoff, Droptype } from "@/Context/DropDownModal";
import { useBreakPoint } from "@/CustomHook/BreakPoint";
import { useState } from "react";
import { IUser } from "@/Components/Conteiner/LayoutContainer";

interface IProps {
  userdata?: IUser;
}

const Onlogin = ({ userdata }: IProps): JSX.Element => {
  const Dropvalue = useRecoilValue(Droponoff);
  const Drop = useSetRecoilState(Droponoff);
  const setDroptype = useSetRecoilState(Droptype);
  const baseimgURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  const userimg = userdata?.userimg;
  const [myimg, setmyimg] = useState<boolean>(false);
  const { ismobile } = useBreakPoint();
  return (
    <div className="ms-4 flex items-center flex-1">
      <div className="me-3 w-[100%]">{ismobile ? "" : <SearchContainer />}</div>
      <div className="flex items-center">
        <Link href={`/myinfo/${userdata?.userid}`}>
          {userimg ? (
            <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
              <img
                className="w-[100%] h-[100%]"
                src={
                  !myimg
                    ? `${baseimgURL}/${userdata?.userimg}`
                    : "/imgs/noimg.png"
                }
                alt="userimg"
                onError={() => {
                  setmyimg(true);
                }}
              ></img>
            </div>
          ) : (
            <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
              <img src="/imgs/defaultuser.png" alt="defaultimg"></img>
            </div>
          )}
        </Link>
        <div
          onClick={() => {
            Drop(!Dropvalue);
            setDroptype("myinfo");
          }}
        >
          <IoIosArrowDropdown size={25} />
        </div>
      </div>
    </div>
  );
};
export default Onlogin;
