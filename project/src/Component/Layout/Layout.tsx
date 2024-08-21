import { useEffect, useState } from "react";
import TabBar from "./TabBar";

import Me from "../Home/Me";
import Skills from "../Home/Skills";
import Portfolio from "../Home/Portfolio";
import Contract from "../Home/Contract";
import Main from "../Home/Main";

const Layout = (): JSX.Element => {
  const [pagestate, setstate] = useState<number>(1);

  useEffect(() => {
    if (pagestate == 1) {
      window.scrollTo({ top: 0 });
    } else if (pagestate == 2) {
      window.scrollTo({ top: window.innerHeight });
    } else if (pagestate == 3) {
      window.scrollTo({ top: window.innerHeight * 2 });
    } else if (pagestate == 4) {
      window.scrollTo({ top: window.innerHeight * 3 });
    } else if (pagestate == 5) {
      window.scrollTo({ top: window.innerHeight * 4 });
    }
  }, [pagestate]);

  return (
    <div className="h-[100%]">
      <TabBar />
      <Main />
      <Me />
      <Skills />
      <Portfolio />
      <Contract />
    </div>
  );
};

export default Layout;
