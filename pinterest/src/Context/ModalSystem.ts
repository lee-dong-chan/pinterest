import { atom } from "recoil";

export const Modalonoff = atom<boolean>({
  key: "modalonoff",
  default: false,
});

export const Modaltype = atom<string>({
  key: "modaltype",
  default: "",
});
