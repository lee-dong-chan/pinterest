import Link from "next/link";

const FourthComp = () => {
  return (
    <div className="flex">
      <div
        className="w-[50%] h-screen"
        style={{
          backgroundImage: "url(/imgs/pic1.png)",
          backgroundSize: "cover",
        }}
      >
        <img
          src="/imgs/pic2.png"
          className="mt-[16rem] ms-[5rem] h-[25rem] rounded-[1rem]"
        ></img>
        <img
          src="/imgs/pic3.png"
          className="absolute h-[6rem] translate-y-[-5rem] translate-x-[3rem]"
        ></img>
        <div className="px-[9rem] text-white">
          <p>Scout the City</p>
          <p>팔로워 56,700명</p>
        </div>
      </div>
      <div className="w-[50%] h-screen flex flex-col justify-center items-center">
        <div className="text-center text-[4rem] text-red-700 font-bold">
          <p>구매하고,만들고,</p>
          <p>시도하고,실행하</p>
          <p>세요.</p>
        </div>
        <p className="w-[27rem] text-[1.5rem] text-wrap text-red-700">
          무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을
          발견할 수 있습니다.
        </p>
        <Link href={"categorylist/3?category=미용"}>
          <div className="mt-10 p-3 border rounded-[1.5rem] bg-red-600 text-white">
            탐색
          </div>
        </Link>
      </div>
    </div>
  );
};
export default FourthComp;
