import React, { useState } from "react";
import styles from "./ToDoList.module.scss";


const ToDoForm = ({ onSubmit }: { onSubmit: (title: string) => void }) => {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);

    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit} className={styles.newItemForm}>
      <div className={styles.formRow}>
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setNewItem(e.currentTarget.value);
          }}
          type="text"
          id="item"
          placeholder="Enter an item..."
          className={styles.input}
        />
      </div>
      <button className={styles.btn}>Add</button>
    </form>
  );
};

export default ToDoForm;
