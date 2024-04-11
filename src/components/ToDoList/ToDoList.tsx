import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const localValue: string | null = localStorage.getItem("ITEMS");
    if (localValue != null && JSON.parse(localValue).length > 0) {
      setTodos(JSON.parse(localValue));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("ITEMS", JSON.stringify(todos));
    }
  }, [todos]);

  function addTodo(title: string) {
    setTodos((prev) => {
      return [...prev, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
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
      <ToDoItems
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <button onClick={() => console.log(todos)}>Console.log</button>
    </>
  );
};

export default ToDoList;
