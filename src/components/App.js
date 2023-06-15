import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const currArr = [1, 2];

  const [items, setItems] = useState(currArr);
  const [inputText, setInputText] = useState("");

  function handleChange(e){
    setInputText(e.target.value);
  }

  function addItem(){
    setItems([...items, inputText]);
    setInputText("")
  }

  return (
    <div className="container">

      <div className="heading"><h1>To-Do List</h1></div>

      <div className="form">

        <input 
          type="text"ф
          name='newTask'
          value={inputText}
          onChange={handleChange}
        />

        <button>
          <span onClick={addItem}>Add</span>
        </button>

      </div>

      <ToDoItem items={items}/>

    </div>
  );
}

export default App;
