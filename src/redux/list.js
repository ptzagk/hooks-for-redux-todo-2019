import { useRedux } from "hooks-for-redux";

const getUniqueId = (list) =>
  list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 1;

export const [useList, { addItem, deleteItem }] = useRedux(
  "list",
  [
    { id: 1, text: "clean the house" },
    { id: 2, text: "buy milk" }
  ],
  {
    addItem: (list, item) => [...list, {...item, id: getUniqueId(list)}],
    deleteItem: (list, item) => list.filter(todo => todo.id !== item.id)
  }
);
