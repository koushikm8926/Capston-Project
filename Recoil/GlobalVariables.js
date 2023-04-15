import { atom, selector } from "recoil";

export const emailVerificationSent = atom({
    key:'emailVerificationSent',
    default:false,
});