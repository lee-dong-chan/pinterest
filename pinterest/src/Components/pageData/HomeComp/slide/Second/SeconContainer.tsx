import { Dispatch, SetStateAction } from "react";
import SecondComp from "./SecondComp";
import { debounce } from "lodash";
interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}
const SecondContainer = ({ setCount, page }: IProps) => {
  return (
    <div
      className="h-screen bg-yellow-100"
      onWheel={debounce((e) => {
        if (e.deltaY > 0) {
          setCount(page + 1);
        } else if (e.deltaY < 0) {
          setCount(page - 1);
        }
      }, 100)}
    >
      <SecondComp />
    </div>
  );
};
export default SecondContainer;
