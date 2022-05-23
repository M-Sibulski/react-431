import { React, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function changeHandle(event) {
    const value = event.target.value;
    setCurrentItem(value);
  }

  function addItem(event) {
    setTodoList((prevList) => {
      return [currentItem, ...prevList];
    });
    setCurrentItem("");
  }

  function removeItem(id) {
    setTodoList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changeHandle} value={currentItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                item={todoItem}
                onClick={removeItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
