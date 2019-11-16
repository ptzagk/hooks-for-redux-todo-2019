import React from "react";
import "./ToDoItem.css";
import { deleteItem } from "../reduxState/list";

export const ToDoItem = ({ item }) => (
  <div className="ToDoItem">
    <p className="ToDoItem-Text">{item.text}</p>
    <button className="ToDoItem-Delete" onClick={() => deleteItem(item)}>
      -
    </button>
  </div>
);
