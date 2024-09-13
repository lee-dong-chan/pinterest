import { IUser } from "@/components/Conteiner/LayoutContainer";
import { atom } from "recoil";

export const Logincheck = atom<string>({
  key: "Userlogcheck",
  default: "false",
});
export const fetchLogincheck = atom<boolean>({
  key: "Userlogfetch",
  default: false,
});
export const Userdata = atom<IUser>({
  key: "userdata",
  default: undefined,
});

export const refetchuser = atom<boolean>({
  key: "userrefetch",
  default: false,
});
