import { Modalonoff, Modaltype } from "@/Context/LoginModalSystem";
import { IPostData } from "@/Components/pageData/PageContainer/PostContainer";
import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSetRecoilState } from "recoil";

export interface IComment {
  user: string;
  img: string;
  content: string;
}

interface IProps {
  data?: IPostData;
  ImgBaseURL?: string;
  login: string;
  user: any;
  setinput: (e: ChangeEvent<HTMLInputElement>) => void;
  setcomment: Dispatch<SetStateAction<string>>;
  submit: () => Promise<void>;
  mutate: UseMutateFunction<IPostData, Error, void, unknown>;
  comment: string;
}

const DataComp = ({
  data,
  ImgBaseURL,
  login,
  user,
  setinput,
  submit,
  setcomment,
  mutate,
  comment,
}: IProps) => {
  const commentCount = data?.comment?.length;
  const Modal = useSetRecoilState(Modalonoff);
  const loginModal = useSetRecoilState(Modaltype);
  const router = useRouter();
  const [img, setimg] = useState<boolean>(false);
  const [Elem, setElem] = useState<JSX.Element>();

  useEffect(() => {
    setElem(
      <div className="w-[2.5rem] h-[2.5rem] border rounded-[2.5rem] overflow-hidden">
        <img
          src={`${ImgBaseURL}/${user?.userimg}`}
          className="pointer-events-none"
          alt="userimg"
        ></img>
      </div>
    );
  }, []);

  return (
    <div className="px-5 py-5 pt flex flex-1 flex-col">
      <div className="text-[1.5rem] text-wrap font-bold ">{data?.title}</div>
      <div className="flex items-center gap-3">
        {data && (
          <img
            src={
              data.postuserimg !== null
                ? !img
                  ? `${ImgBaseURL}/${data?.postuserimg}`
                  : "/imgs/noimg.png"
                : "/imgs/defaultuser.png"
            }
            className="w-[3.5rem] h-[3.5rem] border rounded-[3.5rem] pointer-events-none"
            alt="commentimg"
            onError={() => {
              if (data?.postuserimg) {
                setimg(true);
              }
            }}
          ></img>
        )}

        <div className="text-[0.8rem] text-gray-500">{data?.postuser}</div>
      </div>
      <div className="py-10 text-[1rem]">{data?.content}</div>
      <div className="flex gap-2">
        {data?.tag?.map((item: string, idx: number) => (
          <div
            key={idx}
            className="p-1 w-fit text-[0.8rem] border rounded-[0.5rem] bg-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        {data?.comment[0] ? (
          <div>
            <div className="py-2">댓글{commentCount}개</div>
            <div className="max-h-[15rem] overflow-auto scrollbar-hide ">
              {data.comment.map((item: IComment, idx: number) => (
                <div key={idx} className="m-2 flex items-center gap-1">
                  <img
                    src={`${ImgBaseURL}/${item.img}`}
                    className="w-[2rem] h-[2rem] rounded-[2rem] pointer-events-none"
                    alt="comment"
                  ></img>
                  <div className="font-bold">{item.user}</div>
                  <div className="text-[0.9rem] text-wrap">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="my-3 text-[1.5rem]">댓글</div>
            <div className="py-3 text-gray-400 min-w-[10rem] ">
              아직 댓글이 없습니다! 대화를 시작하려면 하나를 추가하세요.
            </div>
          </div>
        )}
        <div>
          {login === "false" ? (
            <div>
              <input
                onClick={() => {
                  Modal(true);
                  loginModal("login");
                }}
                className="w-[100%] h-[3rem] border rounded-[3rem] p-2"
                placeholder="댓글추가"
              ></input>
            </div>
          ) : (
            <div className={Elem && "flex items-center gap-2 "}>
              {Elem}
              <input
                className="w-[100%] max-w-[23rem] h-[3rem] border rounded-[3rem] p-2"
                placeholder="댓글추가"
                value={comment}
                onChange={(e) => {
                  if (user) {
                    setinput(e);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    if (e.nativeEvent.isComposing === false) {
                      if (comment !== "") {
                        submit();
                        setcomment("");
                        setTimeout(() => {
                          mutate();
                          router.refresh();
                        }, 100);
                      }
                    }
                  }
                }}
              ></input>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DataComp;
