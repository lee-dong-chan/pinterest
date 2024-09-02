import { atom } from "recoil";

export const Droponoff = atom<boolean>({
  key: "dropdown onoff",
  default: false,
});

export const Categoryonoff = atom<boolean>({
  key: "Category onoff",
  default: false,
});
