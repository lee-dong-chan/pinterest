import { Dispatch, SetStateAction } from "react";
import TextComp from "./TextComp";
import CardComp from "./CardComp";
import FirstCardComp from "./FirstCardComp";
import { FasionArr, GardenArr, HomeArr, dinnerArr } from "@/lib/Animation";
import { RiArrowDropDownLine } from "react-icons/ri";

interface IProps {
  slide: number;
  setslide: Dispatch<SetStateAction<number>>;
  setCount: Dispatch<SetStateAction<number>>;
}

const FirstComp = ({ slide, setslide, setCount }: IProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="relative pt-[7rem] text-[3.5rem] text-gray-600 font-bold z-[100] ">
          다음
        </div>
        {slide === 1 && (
          <TextComp
            slide={slide}
            setslide={setslide}
            textcolor={"text-yellow-600"}
            buttoncolor={"bg-yellow-600"}
            text={"저녁 식사 메뉴 아이디어를 찾아보세요"}
          />
        )}
        {slide === 2 && (
          <TextComp
            slide={slide}
            setslide={setslide}
            textcolor={"text-lime-700"}
            buttoncolor={"bg-lime-600"}
            text={"집안 꾸미기 아이디어를 찾아보세요"}
          />
        )}
        {slide === 3 && (
          <TextComp
            slide={slide}
            setslide={setslide}
            textcolor={"text-blue-500 "}
            buttoncolor={"bg-blue-500 "}
            text={"새로운 패션을 찾아보세요"}
          />
        )}
        {slide === 4 && (
          <TextComp
            slide={slide}
            setslide={setslide}
            textcolor={"text-lime-600 "}
            buttoncolor={"bg-lime-600 "}
            text={"정원가꾸기 아이디어를 찾아보세요"}
          />
        )}
      </div>
      <div className=" flex justify-center ">
        {slide === 1 && (
          <FirstCardComp nowdirname="dinner" nowimgs={dinnerArr} />
        )}
        {slide === 2 && (
          <CardComp
            prevdirname={"dinner"}
            previmgs={dinnerArr}
            nowdirname={"home"}
            nowimgs={HomeArr}
          />
        )}
        {slide === 3 && (
          <CardComp
            prevdirname={"home"}
            previmgs={HomeArr}
            nowdirname={"Fasion"}
            nowimgs={FasionArr}
          />
        )}
        {slide === 4 && (
          <CardComp
            prevdirname={"Fasion"}
            previmgs={FasionArr}
            nowdirname={"garden"}
            nowimgs={GardenArr}
          />
        )}
      </div>
      <div className="absolute w-screen h-[20rem] bottom-5  bg-gradient-to-t from-white z-[-100]"></div>
      <div className="absolute w-screen h-[20rem] bottom-5  bg-gradient-to-t from-white z-[-100]"></div>
      <div className="absolute w-screen h-[8rem] bottom-0 bg-yellow-100 ">
        <div
          className="pt-4 w-[100%] text-center text-[1.1rem] "
          onClick={() => {
            setCount(2);
          }}
        >
          방식은 다음과 같습니다. ▾
        </div>
      </div>
      <div
        className="absolute w-screen bottom-[10rem] flex justify-center animate-bounce "
        onClick={() => {
          setCount(2);
        }}
      >
        <div
          className={`h-[4rem] w-[4rem] rounded-[5rem] flex items-center justify-center
          ${slide === 1 && "bg-yellow-600"}  
          ${slide === 2 && "bg-lime-700"}  
          ${slide === 3 && "bg-blue-600"} 
          ${slide === 4 && "bg-lime-500"}`}
        >
          <RiArrowDropDownLine size={80} color="white" />
        </div>
      </div>
    </div>
  );
};
export default FirstComp;
2;
