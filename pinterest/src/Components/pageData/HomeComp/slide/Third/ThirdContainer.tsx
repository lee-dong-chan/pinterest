import { Dispatch, SetStateAction } from "react";
import ThirdComp from "./ThirdComp";
import { debounce } from "lodash";

interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}
const ThirdContainer = ({ setCount, page }: IProps) => {
  return (
    <div
      className="h-screen bg-cyan-100 "
      onWheel={debounce((e) => {
        if (e.deltaY > 0) {
          setCount(page + 1);
        } else if (e.deltaY < 0) {
          setCount(page - 1);
        }
      }, 100)}
    >
      <ThirdComp />
    </div>
  );
};
export default ThirdContainer;
