import React from "react";
import styles from "./ToDoList.module.scss";
import { TodoInterface } from "./ToDoList";
import { deleteFunction, toggleFunction } from "./ToDoItems";

const ToDoItem = ({
  item,
  toggleTodo,
  deleteTodo,
}: {
  item: TodoInterface;
  toggleTodo: toggleFunction;
  deleteTodo: deleteFunction;
}) => {
  return (
    <li key={item.id}>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            toggleTodo(item.id, e.currentTarget.checked);
          }}
        />
        {item.title}
      </label>
      <button
        className={`${styles.btn} ${styles.btnDanger}`}
        onClick={() => deleteTodo(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;