import { IUser } from "@/Components/Conteiner/BodyContainer";
import SearchContainer from "@/Components/Conteiner/SearchContainer";
import Link from "next/link";

interface IProps {
  userdata?: IUser;
}

const Onlogin = ({ userdata }: IProps): JSX.Element => {
  const userimg = userdata?.userimg;
  return (
    <div className="ms-4 flex items-center flex-1">
      <div className="me-5 w-[100%]">
        <SearchContainer />
      </div>
      <div>
        <Link href={`/myinfo/${userdata?.userid}`}>
          {userimg ? (
            <img src={`/imgs/${userdata?.userimg}.png`}></img>
          ) : (
            <img src="/imgs/defaultuser.png"></img>
          )}
        </Link>
      </div>
    </div>
  );
};
export default Onlogin;
