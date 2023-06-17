import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([1, 2]);

  return (
    <div className="container">

      <div className="heading"><h1>To-Do List</h1></div>

      <InputArea setItemsArr={setItems}/>

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem 
              setItemsArr={setItems} 
              text={todoItem} 
              id={index}/>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
