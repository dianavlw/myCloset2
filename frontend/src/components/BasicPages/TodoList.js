import React from 'react';
import { useState } from "react" ;
import Profile from "./Profile"

function TodoList(props) {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      
        <h2 className="imgicons">To-Do List</h2>
        <br></br>
        <Profile img="https://image.flaticon.com/icons/png/512/3566/3566336.png" />
        <br></br>
      <div className="todo">
        
        <input onChange={handleChange} type="text" value={inputText} />
        <br></br>
        <button onClick={addItem}>
          
          <span>Add</span>
          
        </button>
      </div>
        
      <div>
      <br></br>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;