import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
interface IProps {
  textcolor: string;
  buttoncolor: string;
  text: string;
  slide: number;
  setslide: Dispatch<SetStateAction<number>>;
  addinterval?: NodeJS.Timeout;
  firstinterval?: NodeJS.Timeout;
}

const TextComp = ({
  textcolor,
  text,
  buttoncolor,
  setslide,
  slide,
}: IProps) => {
  return (
    <div>
      <div className="relative">
        {slide === 1 && (
          <div className=" h-[8rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: "-1rem" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <div className={`py-2 text-[3.5rem] ${textcolor} font-bold `}>
                {text}
              </div>
            </motion.div>
          </div>
        )}
        {slide === 2 && (
          <div className="h-[8rem] text-center">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, translateY: "-3em" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={`text-[3.5rem] text-yellow-600 font-bold `}>
                {"저녁 식사 메뉴 아이디어를 찾아보세요"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                translateY: "-5rem",
              }}
              exit={{ opacity: 0, translateY: "-3rem" }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className={`text-[3.5rem] ${textcolor} font-bold `}>
                {text}
              </div>
            </motion.div>
          </div>
        )}
        {slide === 3 && (
          <div className="h-[8rem] text-center">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, translateY: "-3rem" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={`text-[3.5rem] text-lime-700 font-bold `}>
                {"집안 꾸미기 아이디어를 찾아보세요"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: "-5rem" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className={`text-[3.5rem] ${textcolor} font-bold `}>
                {text}
              </div>
            </motion.div>
          </div>
        )}
        {slide === 4 && (
          <div className="h-[8rem] text-center">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, translateY: "-3rem" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={`text-[3.5rem] text-blue-500 font-bold `}>
                {"새로운 패션을 찾아보세요"}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateY: "-5rem" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className={`text-[3.5rem] ${textcolor} font-bold `}>
                {text}
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <div className=" mx-auto w-fit flex gap-3">
        <div
          onClick={() => {
            setslide(1);
          }}
          className={`w-[0.8rem] h-[0.8rem] rounded-[0.8rem] border  ${
            slide === 1 ? `${buttoncolor}` : "bg-gray-200"
          }`}
        ></div>
        <div
          onClick={() => {
            setslide(2);
          }}
          className={`w-[0.8rem] h-[0.8rem] rounded-[0.8rem] border   ${
            slide === 2 ? `${buttoncolor}` : "bg-gray-200"
          } `}
        ></div>
        <div
          onClick={() => {
            setslide(3);
          }}
          className={`w-[0.8rem] h-[0.8rem] rounded-[0.8rem] border   ${
            slide === 3 ? `${buttoncolor}` : "bg-gray-200"
          } `}
        ></div>
        <div
          onClick={() => {
            setslide(4);
          }}
          className={`w-[0.8rem] h-[0.8rem] rounded-[0.8rem] border   ${
            slide === 4 ? `${buttoncolor}` : "bg-gray-200"
          } `}
        ></div>
      </div>
    </div>
  );
};
export default TextComp;
