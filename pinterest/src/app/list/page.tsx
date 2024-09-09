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
      <div>{<ListContainer categorylist={categorys} />}</div>
    </div>
  );
};
export default Mainlist;
