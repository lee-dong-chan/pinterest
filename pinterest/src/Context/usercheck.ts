import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { atom } from "recoil";

export const Logincheck = atom<string>({
  key: "logcheck",
  default: "false",
});

export const Userdata = atom<IUser>({
  key: "userdata",
  default: undefined,
});
