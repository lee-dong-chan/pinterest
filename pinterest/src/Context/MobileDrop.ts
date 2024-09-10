import { atom } from "recoil";

export const MobileDrop = atom({
  key: "MobileDrop toggle",
  default: false,
});

export const MobileDropType = atom({
  key: "MobileDropType",
  default: "",
});
