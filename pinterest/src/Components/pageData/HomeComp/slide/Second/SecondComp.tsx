import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const SecondComp = () => {
  return (
    <div className="mx-auto px-[5rem] w-[80rem] h-[100%] flex justify-between items-center">
      <div>
        <img
          src="/imgs/chicken1.png"
          className="w-[11rem] absolute z-[10] translate-x-[15rem]  "
        ></img>
        <img
          src="/imgs/chicken2.png"
          className="w-[16rem] absolute z-[20]  translate-x-[3rem] translate-y-[-12rem]"
        ></img>
        <img
          src="/imgs/chicken3.png"
          className="w-[11rem] absolute z-[10] translate-x-[15rem] translate-y-[-20rem]"
        ></img>
        <img
          src="/imgs/chicken4.png"
          className="w-[13rem] absolute z-[10]  translate-x-[-5rem] translate-y-[-10rem] "
        ></img>
        <div className="absolute w-[21rem] h-[6rem] rounded-[4rem] bg-white z-[30] flex justify-center items-center translate-y-[-5rem]">
          <FaSearch size={30} />
          <Link href={"/searchlist?keyword=닭고기로 만드는 손쉬운 저녁 메뉴"}>
            <p className="my-auto text-center text-[1.5rem] text-red-800 font-bold">
              닭고기로 만드는 손쉬운 저녁 <br /> 메뉴
            </p>
          </Link>
        </div>
      </div>

      <div className="text-center text-red-600 ">
        <h1 className="p-5 text-[4rem] font-bold">아이디어 검색</h1>
        <div className="pb-5 text-[1.5rem]">
          <p>어떤것을 시도해 보고 싶으세요? '닭고기로</p>
          <p>만드는 간단한 저녁 메뉴' 와 같이 관심 있는</p>
          <p>내용을 검색하고 결과를 확인해 보세요</p>
        </div>
        <Link href={"/list"}>
          <div className="py-2 px-4 mx-auto w-fit text-white border rounded-[2rem] bg-red-600">
            탐색
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SecondComp;
