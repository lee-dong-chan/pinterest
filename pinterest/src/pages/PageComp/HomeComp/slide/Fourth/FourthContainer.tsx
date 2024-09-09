import FourthComp from "./FourthComp";
import { Dispatch, SetStateAction } from "react";
import { debounce } from "lodash";
interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}
const FourthContainer = ({ setCount, page }: IProps) => {
  return (
    <div
      className="h-screen bg-pink-100"
      onWheel={debounce((e) => {
        if (e.deltaY > 0) {
          setCount(page + 1);
        } else if (e.deltaY < 0) {
          setCount(page - 1);
        }
      }, 100)}
    >
      <FourthComp />
    </div>
  );
};
export default FourthContainer;
