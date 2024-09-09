import { IUser } from "@/Components/Conteiner/LayoutContainer";

interface IProps {
  userdata?: IUser;
  logout: () => Promise<void>;
}
const DropComp = ({ userdata, logout }: IProps) => {
  const imgbaseURL = process.env.NEXT_PUBLIC_SERVER_IMG_BASE_URL;
  return (
    <div className="p-3 text-[0.8rem]">
      <div>현재 로그인 계정</div>
      <div className="p-2 flex items-center">
        <div>
          {userdata?.userimg == null ? (
            <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
              <img
                src="/imgs/defaultuser.png"
                alt="defaultimg"
                className="pointer-events-none"
              ></img>
            </div>
          ) : (
            <div className="me-1 border overflow-hidden h-[3rem] w-[3rem] rounded-[3rem]">
              <img
                src={`${imgbaseURL}/${userdata.userimg}`}
                alt="userimg"
                className="pointer-events-none"
              ></img>
            </div>
          )}
        </div>
        <div>{userdata?.username}</div>
      </div>
      <div
        className="text-[1.2rem] font-bold"
        onClick={() => {
          logout();
          window.location.replace("/list");
        }}
      >
        로그아웃
      </div>
    </div>
  );
};
export default DropComp;
