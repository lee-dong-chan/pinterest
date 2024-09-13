import SearchPageContainer from "@/components/pageData/PageContainer/SearchPageContainer";

interface Props {
  searchParams: { [key: string]: string | string[] | null };
}

const Searchlist = ({ searchParams }: Props) => {
  console.log(searchParams);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className="mt-[3rem] text-[1.5rem] font-bold">
          검색: {searchParams.keyword}
        </div>
        <div className="text-center">
          pinterest에서 {searchParams.keyword}에 관한 멋진 아이디어를 확인하고
          영감을 얻어보세요. 아이디어를 얻고 새로운 것을
          <br />
          시도해 보세요.
        </div>
        <SearchPageContainer />
      </div>
    </div>
  );
};
export default Searchlist;
