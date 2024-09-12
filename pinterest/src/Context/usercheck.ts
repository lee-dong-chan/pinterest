import { IUser } from "@/Components/Conteiner/LayoutContainer";
import { atom } from "recoil";

export const Logincheck = atom<string>({
  key: "Userlogcheck",
  default: "false",
});

export const Userdata = atom<IUser>({
  key: "userdata",
  default: undefined,
});

export const refetchuser = atom<boolean>({
  key: "userrefetch",
  default: false,
});
