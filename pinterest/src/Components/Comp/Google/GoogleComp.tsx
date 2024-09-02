import { Middlebutton } from "@/Components/Button/Button";

const GoogleComp = (): JSX.Element => {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const callBackUrl = process.env.NEXT_PUBLIC_GOOGLE_COLLBACK_URL;
  const googleOAuthUrl: string = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&scope=openid%20profile%20email&redirect_uri=${callBackUrl}`;

  //URL로 이동시키는 펑션
  const loginHandler = () => {
    window.location.href = googleOAuthUrl;
  };
  return (
    <div className="mb-8" onClick={loginHandler}>
      <img src="/imgs/google.png" className="absolute w-[2rem] mx-3 my-2"></img>
      <Middlebutton
        text="구글 계정으로 계속하기"
        back="white"
        color="text-black"
      />
    </div>
  );
};
export default GoogleComp;
