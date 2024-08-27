"use client";

import { RecoilRoot } from "recoil";

type IProps = {
  children: React.ReactNode;
};
const RecoilWrap = ({ children }: IProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilWrap;
