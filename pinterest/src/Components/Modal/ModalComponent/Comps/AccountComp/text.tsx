const Ment = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/imgs/logo.png"
        className="mt-5 w-[3rem] pointer-events-none"
        alt="logiimg"
      ></img>
      <div>
        <p className="text-center  text-[2.3rem] text-wrap">
          Pinterst에 오신것을 환영합니다
        </p>
        <p className="text-center text-wrap">
          시도해볼만한 새로운 아이디어 찾기
        </p>
      </div>
    </div>
  );
};
export default Ment;
