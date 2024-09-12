import { motion } from "framer-motion";
interface IProps {
  prevdirname: string;
  nowdirname: string;
  previmgs: string[];
  nowimgs: string[];
}

const CardComp = ({ previmgs, nowimgs, prevdirname, nowdirname }: IProps) => {
  return (
    <div className="absolute h-[30rem] w-[100rem]  flex gap-3 z-[-200]">
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative top-[-8rem] z-100">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[0]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[1]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative top-[-50rem] z-0">
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
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[2]}.png`}
            ></img>
            <img
              className="w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[3]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="relative top-[-42rem]">
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
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative top-[8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[4]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[5]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <div className="relative top-[-34rem]">
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
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="relative top-[16rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[6]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          <div className="relative top-[-3rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[6]}.png`}
            ></img>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="relative top-[8rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[7]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[8]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          <div className="relative top-[-34rem]">
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
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="relative">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[9]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[10]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="relative top-[-42rem]">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[9]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[10]}.png`}
            ></img>
          </div>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, translateY: "-2rem" }}
          transition={{ duration: 1.8 }}
        >
          <div className="relative top-[-8rem] z-100">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[11]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${prevdirname}/${previmgs[12]}.png`}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, translateY: "-2rem" }}
          transition={{ duration: 0.5, delay: 2.9 }}
        >
          <div className="relative top-[-50rem] z-0">
            <img
              className="mb-5 w-[17rem] h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[11]}.png`}
            ></img>
            <img
              className=" w-[17rem]  h-[20rem] rounded-[1rem]"
              src={`/imgs/${nowdirname}/${nowimgs[12]}.png`}
            ></img>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default CardComp;
