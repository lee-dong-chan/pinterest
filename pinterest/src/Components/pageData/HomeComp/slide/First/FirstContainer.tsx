"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FirstComp from "./FirstComp";
import { debounce } from "lodash";
interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}

const FirstContainer = ({ setCount, page }: IProps) => {
  const [slide, setslide] = useState<number>(1);
  const [addinterval, setaddinterval] = useState<NodeJS.Timeout>();
  const [firstinterval, setfirstinterval] = useState<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(addinterval);
    clearTimeout(firstinterval);
    if (slide < 4) {
      const addslide = setTimeout(() => {
        setslide(slide + 1);
      }, 4000);
      setaddinterval(addslide);
    } else if (slide > 3) {
      const setfirst = setTimeout(() => {
        setslide(1);
      }, 4000);
      setfirstinterval(setfirst);
    }
    return () => {
      clearTimeout(addinterval);
      clearTimeout(firstinterval);
    };
  }, [slide]);

  return (
    <div
      onWheel={debounce((e) => {
        if (e.deltaY > 0) {
          setCount(page + 1);
        }
      }, 100)}
    >
      <FirstComp slide={slide} setslide={setslide} setCount={setCount} />
    </div>
  );
};
export default FirstContainer;
