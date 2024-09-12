import Link from "next/link";

const ThirdComp = () => {
  return (
    <div className="w-[90rem] h-[100%] mx-auto flex items-center justify-between">
      <div className="text-center">
        <p className="text-[4rem] font-bold text-cyan-600 text-wrap">
          좋아하는 아이디어를 저장하세요
        </p>
        <p className="py-10 text-[1.3rem] text-cyan-600">
          나중에 다시 볼 수 있도록 좋아하는 콘텐
          <br />
          츠를 수집하세요
        </p>
        <Link href={"/list"}>
          <div className="px-3 py-2 mx-auto w-fit border rounded-[1rem] text-white bg-red-600">
            탐색
          </div>
        </Link>
      </div>
      <div className="w-[45rem] flex">
        <div>
          <div
            className=" m-3 h-[25rem] w-[25rem] rounded-[4rem] flex flex-col  items-center "
            style={{
              backgroundImage: "url(/imgs/idea1.png)",
              backgroundSize: "cover",
            }}
          >
            <Link href={"/searchlist?keyword=집 분위기 바꾸기:양치식물"}>
              <div className="mt-[7rem]  px-9 text-white text-[3rem] text-wrap">
                집 분위기 바꾸기:양치식물
              </div>
            </Link>
            <div className="flex justify-even">
              <img className="w-[6rem]" src="/imgs/idea2.png"></img>
              <img className="mx-3 w-[6rem]" src="/imgs/idea3.png"></img>
              <img className="w-[6rem]" src="/imgs/idea4.png"></img>
            </div>
          </div>
          <div
            className="ms-40 mt-10 h-[15rem] w-[15rem] rounded-[4rem] "
            style={{
              backgroundImage: "url(/imgs/idea5.png)",
              backgroundSize: "cover",
            }}
          >
            <Link href={"/searchlist?keyword=멋진 음료 서빙"}>
              <div className="pt-[12rem] text-center text-[1.5rem] text-white">
                멋진 음료 서빙
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div
            className="m-2 h-[13rem] w-[13rem] rounded-[4rem]"
            style={{
              backgroundImage: "url(/imgs/idea6.png)",
              backgroundSize: "cover",
            }}
          >
            <Link href={"/searchlist?keyword=스칸디나비아풍 침실"}>
              <div className="pt-[7rem] ps-8 text-white text-[1.7rem] text-wrap">
                스칸디나비아풍
                <p>침실</p>
              </div>
            </Link>
          </div>
          <div
            className="m-6 h-[10rem] w-[10rem] rounded-[3rem]"
            style={{
              backgroundImage: "url(/imgs/idea7.png)",
              backgroundSize: "cover",
            }}
          >
            <Link href={"/searchlist?keyword=꿈의 데크"}>
              <div className="text-white text-[1.3rem] px-4 pt-[7rem]">
                꿈의 데크
              </div>
            </Link>
          </div>
          <div
            className="mt-20 h-[15rem] w-[15rem] rounded-[4rem]"
            style={{
              backgroundImage: "url(/imgs/idea8.png)",
              backgroundSize: "cover",
            }}
          >
            <Link href={"/searchlist?keyword=화장실 업그레이드"}>
              <div className="px-4 pt-[7rem] text-white text-[1.8rem]">
                화장실 업그레
                <p>이드</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdComp;
