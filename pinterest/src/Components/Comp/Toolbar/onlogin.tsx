import { IoIosArrowDropdown } from "react-icons/io";
import { IUser } from "@/Components/Conteiner/LayoutContainer";
import SearchContainer from "@/Components/Conteiner/SearchContainer";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Droponoff } from "@/Context/DropDownModal";

interface IProps {
  userdata?: IUser;
}

const Onlogin = ({ userdata }: IProps): JSX.Element => {
  const Dropvalue = useRecoilValue(Droponoff);
  const Drop = useSetRecoilState(Droponoff);
  const baseimgURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  const userimg = userdata?.userimg;
  return (
    <div className="ms-4 flex items-center flex-1">
      <div className="me-3 w-[100%]">
        <SearchContainer />
      </div>
      <div className="flex items-center">
        <Link href={`/myinfo/${userdata?.userid}`}>
          {userimg ? (
            <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
              <img
                src={`${baseimgURL}/${userdata.userimg}`}
                alt="userimg"
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
          }}
        >
          <IoIosArrowDropdown size={25} />
        </div>
      </div>
    </div>
  );
};
export default Onlogin;
