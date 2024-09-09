import Login from "@/Components/Modal/ModalContainer/Account/login";
import FifthComp from "./FifthComp";
import { Dispatch, SetStateAction } from "react";
import { debounce } from "lodash";

interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}

const FifthContainer = ({ setCount, page }: IProps) => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(/imgs/pins.png)",
        backgroundSize: "cover",
      }}
      onWheel={debounce((e) => {
        if (e.deltaY < 0) {
          setCount(page - 1);
        }
      }, 50)}
    >
      <FifthComp setCount={setCount} />
    </div>
  );
};
export default FifthContainer;
