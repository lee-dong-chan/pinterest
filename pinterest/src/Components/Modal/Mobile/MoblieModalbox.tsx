import SearchContainer from "@/components/Conteiner/SearchContainer";
import { MobileDropType } from "@/Context/MobileDrop";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";
import MobileCategory from "./MobileCategory";
const MobileModalBox = () => {
  const type = useRecoilValue(MobileDropType);
  return (
    <div className="fixed top-0">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: "3.5rem" }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-2 w-screen bg-white border-b border-t">
          <div className="p-2">{type === "search" && <SearchContainer />}</div>
          <div className="pb-5">
            {type === "category" && <MobileCategory />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default MobileModalBox;
