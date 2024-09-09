import { useRouter } from "next/navigation";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";
interface IProps {
  setsearch: Dispatch<SetStateAction<string>>;
  keyword: string;
}
const SearchComp = ({ setsearch, keyword }: IProps): JSX.Element => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div className="mt-4 ms-3 absolute ">
          <FaSearch />
        </div>
        <input
          className="ps-10 w-[100%] h-[3rem] border rounded-[1.3rem] bg-gray-200 "
          placeholder={`쉽게 만들수 있는 저녁메뉴,패션 등을 검색해 보세요`}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setsearch(e.target.value);
          }}
          value={keyword}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              if (e.nativeEvent.isComposing === false) {
                router.replace(`/searchlist?keyword=${keyword}`);
                setsearch("");
              }
            }
          }}
        ></input>
      </div>
    </div>
  );
};

export default SearchComp;
