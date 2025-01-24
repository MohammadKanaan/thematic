import { atom } from "jotai";

export const searchAtom = atom("");
export const isSearchingAtom = atom(false);

export const likedTracksAtom = atom<number[]>([]);
