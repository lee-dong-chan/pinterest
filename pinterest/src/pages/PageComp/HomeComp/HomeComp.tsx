import { Dispatch, SetStateAction } from "react";
import FifthContainer from "./slide/Fifth/FifthContainer";
import FirstContainer from "./slide/First/FirstContainer";
import FourthContainer from "./slide/Fourth/FourthContainer";
import SecondContainer from "./slide/Second/SeconContainer";
import ThirdContainer from "./slide/Third/ThirdContainer";

interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  page: number;
}
const HomeComp = ({ setCount, page }: IProps) => {
  return (
    <div>
      <FirstContainer setCount={setCount} page={page} />
      <SecondContainer setCount={setCount} page={page} />
      <ThirdContainer setCount={setCount} page={page} />
      <FourthContainer setCount={setCount} page={page} />
      <FifthContainer setCount={setCount} page={page} />
    </div>
  );
};
export default HomeComp;
