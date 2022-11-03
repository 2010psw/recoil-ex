import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["aaaaaaa", "bbbbbbb", "ccccccc"],
    Doing: ["aaaa", "bbbb", "cccc"],
    Done: ["a", "b", "c"],
  },
});
