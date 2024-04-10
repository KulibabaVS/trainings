import React, { useState } from "react";
import styles from "./ToDoList.module.scss";
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

const ToDoList = () => {
  const [todos, setTodos] = useState<Array<TodoInterface>>([]);

  function addTodo(title: string) {
    setTodos((prev) => {
      return [...prev, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; //WAT??
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((todos) => todos.filter((todo) => id !== todo.id));
  }

  return (
    <>
      <ToDoForm onSubmit={addTodo} />
      <ToDoItems todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

      
    </>
  );
};

export default ToDoList;
