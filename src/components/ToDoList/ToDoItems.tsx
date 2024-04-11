import React from "react";
import styles from "./ToDoList.module.scss";
import { TodoInterface } from "./ToDoList";
import ToDoItem from "./ToDoItem";

export type toggleFunction = (id: string, completed: boolean) => void;
export type deleteFunction = (id: string) => void;

export interface ItemsProps {
  todos: TodoInterface[];
  toggleTodo: toggleFunction;
  deleteTodo: deleteFunction;
}
const ToDoItems = ({ todos, toggleTodo, deleteTodo }: ItemsProps) => {
  return (
    <>
      <h1 className={styles.header}>ToDo List</h1>
      <ul className={styles.list}>
        {todos.length === 0 && "No ToDos"}
        {todos.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoItems;
