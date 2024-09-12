import { motion } from "framer-motion";
interface IProps {
  nowdirname: string;
  nowimgs: string[];
}
const FirstCardComp = ({ nowdirname, nowimgs }: IProps) => {
  if (nowdirname && nowimgs) {
    return (
      <div className="absolute h-[30rem] w-[100rem]  flex gap-3 z-[-200]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative top-[-8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[0]}.png`}
            ></img>
            <img
              className="w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[1]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[2]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[3]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative top-[8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[4]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[5]}.png`}
            ></img>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="relative top-[20rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[6]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="relative top-[8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[7]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[8]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="relative">
            <img
              className="mb-5  w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[9]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[10]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <div className="relative top-[-8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[11]}.png`}
            ></img>
            <img
              className=" w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[12]}.png`}
            ></img>
          </div>
        </motion.div>
      </div>
    );
  }
};
export default FirstCardComp;
