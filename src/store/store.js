import { atom } from "recoil";

export const log = atom({
  key: "log",
  default: false,
});

export const vrNum = atom({
  key: "vrNum",
  default: "",
});
