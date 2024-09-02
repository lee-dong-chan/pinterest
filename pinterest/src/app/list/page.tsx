import ListContainer from "@/pages/PageContainer/ListContainer";
import axios from "axios";

export interface ICategory {
  id: number;
  name: string;
  img: string;
}

const category = async () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const { data } = await axios.get(`${baseURL}/category`);
  const lastdata: ICategory[] = data;
  return lastdata;
};

let categorys: ICategory[] = [];

const Mainlist = async () => {
  categorys = await category();
  console.log(categorys);
  return (
    <div>
      <div className="mx-auto my-10 w-fit text-[1.7rem] font-bold">
        pinterest 최고의 아이디어 탐색하기
      </div>
      <div>{<ListContainer categorylist={categorys} />}</div>
    </div>
  );
};
export default Mainlist;

// const Mainlist = async () => {
//   return (
//     <div>
//       <div className="mx-auto my-10 w-fit text-[1.7rem] font-bold">
//         pinterest 최고의 아이디어 탐색하기
//       </div>
//       <div>{<ListContainer />}</div>
//     </div>
//   );
// };
// export default Mainlist;
