import ImgComp from "@/Components/pageData/PageComp/Write/ImgComp";
import InfoComp from "@/Components/pageData/PageComp/Write/InfoComp";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  ICategory,
  ISelecttag,
  Itag,
} from "@/Components/pageData/PageContainer/WriteContainer";
import { useBreakPoint } from "@/CustomHook/BreakPoint";

interface IProps {
  inputfile: (e: ChangeEvent<HTMLInputElement>) => void;
  upload: () => void;
  previewUrl: string;
  settag: Dispatch<SetStateAction<string>>;
  tagdata: Itag[];
  entertag: () => void;
  clicktag: (id: number, name: string) => void;
  select: ISelecttag[];
  setslelect: Dispatch<SetStateAction<ISelecttag[]>>;
  tag: string;
  settitle: Dispatch<SetStateAction<string>>;
  setcontent: Dispatch<SetStateAction<string>>;
  categorydata: ICategory[];
  selectcate: ICategory;
  setselctcate: Dispatch<SetStateAction<ICategory>>;
  fail: boolean;
}

const WriteComp = ({
  inputfile,
  upload,
  previewUrl,
  settag,
  tagdata,
  entertag,
  clicktag,
  select,
  setslelect,
  tag,
  settitle,
  setcontent,
  categorydata,
  selectcate,
  setselctcate,
  fail,
}: IProps): JSX.Element => {
  const { isdesktop } = useBreakPoint();

  return (
    <div>
      {isdesktop ? (
        <div className="ps-5 py-5 border-t border-b text-[1.3rem] font-bold flex items-center justify-between">
          <div>핀 만들기</div>
          <div>
            <div
              className={`px-8 py-3 w-fit border text-[1.2rem] text-white me-10 rounded-[1rem] ${
                fail ? "bg-gray-200" : " bg-red-500"
              }`}
              onClick={() => {
                if (!fail) {
                  upload();
                }
              }}
            >
              게시
            </div>
          </div>
        </div>
      ) : (
        <div className="ps-5 py-2  border-b text-[1.3rem] font-bold flex items-center justify-between bg-white  sticky top-[7.9%]">
          <div>핀 만들기</div>
          <div
            className={`px-8 py-3 w-fit border text-[1.2rem] text-white me-10 rounded-[1rem] ${
              fail ? "bg-gray-200" : " bg-red-500"
            }`}
            onClick={() => {
              if (!fail) {
                upload();
              }
            }}
          >
            게시
          </div>
        </div>
      )}
      <div
        className={
          isdesktop
            ? "mx-auto mt-7 max-w-[70rem] flex items-center gap-[5rem]"
            : ""
        }
      >
        <ImgComp inputfile={inputfile} previewUrl={previewUrl} />
        <InfoComp
          settag={settag}
          tagdata={tagdata}
          entertag={entertag}
          clicktag={clicktag}
          select={select}
          setslelect={setslelect}
          tag={tag}
          settitle={settitle}
          setcontent={setcontent}
          categorydata={categorydata}
          setselctcate={setselctcate}
          selectcate={selectcate}
        />
      </div>
    </div>
  );
};
export default WriteComp;
