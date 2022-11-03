import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: ["aaaaaaa", "bbbbbbb", "ccccccc"],
    doing: ["aaaa", "bbbb", "cccc"],
    done: ["a", "b", "c"],
  },
});
