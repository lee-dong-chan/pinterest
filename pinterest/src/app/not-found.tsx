import Loading from "@/components/Comp/Loading/Loding";

const NotFound = () => {
  return (
    <div className="w-screen flex items-center justify-center ">
      <div className="relative w-[20rem] h-[25rem] text-center text-[1.5rem] z-[10]">
        <br />
        404 not found
        <br />
        페이지를 불러올 수 없습니다.
      </div>
      <div className="absolute ">
        <Loading />
      </div>
    </div>
  );
};
export default NotFound;
