import { IPost } from "@/pages/PageContainer/ListContainer";
import Comp from "./Comp";

interface IProps {
  data: any[] | undefined;
  cols: number;
}

const ListComp = ({ data, cols }: IProps) => {
  const arr: IPost[] = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      arr.push(...data[i]);
    }
  }

  const Arr: number[] = [];

  for (let i = 0; i < arr.length; i += cols) {
    const a = 0;
    Arr.push(a + i);
  }

  const colsArr: number[] = [];

  for (let i = 0; i < cols; i++) {
    colsArr.push(i);
  }

  return (
    <div className="mx-auto max-w-[70rem] flex gap-5">
      {colsArr.map((col: number, idx: number) => (
        <div key={idx}>
          {Arr.map((item: number, idx: number) => {
            return <Comp key={idx} data={arr[item + col]} />;
          })}
        </div>
      ))}
    </div>
  );
};
export default ListComp;
