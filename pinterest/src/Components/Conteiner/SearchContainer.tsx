"use client";
import { useState } from "react";
import SearchComp from "../Comp/Search/SearchComp";
import { Debounce } from "@/CustomHook/Debounce";

const SearchContainer = (): JSX.Element => {
  const [search, setsearch] = useState<string>("");

  const Keyword = Debounce(search, 1000);

  return <SearchComp setsearch={setsearch} keyword={search} />;
};

export default SearchContainer;
