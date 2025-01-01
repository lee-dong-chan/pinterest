import {
  ICategory,
  ISelecttag,
  Itag,
} from "@/Components/pageData/PageContainer/WriteContainer";
import { IoIosArrowDropdown } from "react-icons/io";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IoReload } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categoryonoff } from "@/Context/DropDownModal";
import { useBreakPoint } from "@/CustomHook/BreakPoint";

interface IProps {
  settag: Dispatch<SetStateAction<string>>;
  tagdata: Itag[];
  entertag: () => void;
  clicktag: (id: number, name: string) => void;
  select: ISelecttag[];
  setslelect: Dispatch<SetStateAction<ISelecttag[]>>;
  tag: string;
  setcontent: Dispatch<SetStateAction<string>>;
  settitle: Dispatch<SetStateAction<string>>;
  categorydata: ICategory[];
  selectcate: ICategory;
  setselctcate: Dispatch<SetStateAction<ICategory>>;
}

const InfoComp = ({
  settag,
  tagdata,
  entertag,
  clicktag,
  select,
  setslelect,
  tag,
  setcontent,
  settitle,
  categorydata,
  selectcate,
  setselctcate,
}: IProps): JSX.Element => {
  const [tagDrop, settagDrop] = useState<boolean>(false);
  const cateonoff = useSetRecoilState(Categoryonoff);
  const catestate = useRecoilValue(Categoryonoff);
  const { isdesktop } = useBreakPoint();

  useEffect(() => {
    if (tagdata[0]) {
      settagDrop(true);
    } else {
      settagDrop(false);
    }
  }, [tagdata]);

  return (
    <div
      className={
        isdesktop
          ? "flex flex-1 flex-col gap-5"
          : "mx-3 pb-[1rem] flex flex-1 flex-col gap-5"
      }
    >
      <div className="w-[100%]">
        <div className="py-2 text-[0.8rem]">제목</div>
        <input
          className="p-3 h-[3.2rem] w-[100%] border border-gray-400 rounded-[0.5rem]"
          placeholder="제목 추가"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            settitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="w-[100%]">
        <div className="py-2 text-[0.8rem]">설명</div>
        <textarea
          className="p-3 h-[7rem] w-[100%] border border-gray-400 rounded-[0.5rem] resize-none"
          placeholder="자세한 설명을 추가하세요"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setcontent(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="w-[100%]">
        <div
          className="flex items-center gap-2 w-fit"
          onClick={() => {
            cateonoff(!catestate);
          }}
        >
          <div className="py-2 text-[0.8rem]">카테고리 선택</div>
          <IoIosArrowDropdown />
        </div>
        <div className="relative">
          <div className="relative  p-2 w-[100%] h-[3rem] border border-gray-400 rounded flex items-center bg-white z-[10] ">
            {selectcate.name}
          </div>
          {catestate && (
            <div className="absolute pt-[3rem] top-0  w-[100%] h-[15rem] border-s border-e border-b rounded-b bg-white overflow-auto z-[5] ">
              {categorydata.map((item: ICategory, idx: number) => (
                <div
                  key={idx}
                  className="px-3 py-2 text-[1.1rem] hover:bg-gray-200"
                  onClick={() => {
                    setselctcate({
                      id: item.id,
                      name: item.name,
                      img: item.img,
                    });
                    cateonoff(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="relative w-[100%] h-[7rem]">
        <div className="py-2 text-[0.8rem]">태그검색</div>
        <input
          className="relative p-3 h-[3.2rem] w-[100%] border border-gray-400 rounded-[0.5rem] bg-white  z-[3]"
          placeholder="태그검색"
          type="text"
          value={tag}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length < 10) {
              settag(e.target.value);
            }
            if (e.target.value === "") {
              settagDrop(false);
            }
          }}
          onKeyDown={(e) => {
            if (select.length < 6) {
              if (e.key == "Enter") {
                if (e.nativeEvent.isComposing === false) {
                  if (tagdata && !tagDrop) {
                    entertag();
                    settag("");
                  }
                }
              }
            }
          }}
        ></input>
        {tagDrop && (
          <div className="absolute pt-[1.2rem] top-[-10px] p-2 relative w-[100%] border z-[0]">
            {tagdata.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  clicktag(item.id, item.name);
                  settagDrop(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[100%]">
        <div className="flex items-center">
          <div className="py-2 text-[0.8rem]">선택태그</div>
          <div
            className="p-1"
            onClick={() => {
              setslelect([]);
            }}
          >
            <IoReload />
          </div>
        </div>
        <div className="p-3 mb-10 h-[3.2rem] w-[100%] flex gap-2">
          {select &&
            select.map((item, idx) => (
              <div
                key={idx}
                className="px-2 text-center text-[0.9rem] border rounded-[0.4rem] bg-gray-200"
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default InfoComp;
