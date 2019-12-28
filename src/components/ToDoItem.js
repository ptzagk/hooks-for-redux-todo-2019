import React from "react";
import { deleteItem } from "../redux/list";
import "./ToDoItem.css";

export const ToDoItem = ({ item }) =>
  <div className="ToDoItem">
    <p className="ToDoItem-Text">{item.text}</p>
    <button className="ToDoItem-Delete" onClick={() => deleteItem(item)}>
      -
    </button>
  </div>
