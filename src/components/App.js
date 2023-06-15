import React, { useState } from "react";

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
          type="text"
          name='newTask'
          value={inputText}
          onChange={handleChange}
        />

        <button>
          <span onClick={addItem}>Add</span>
        </button>

      </div>

      <div>
        <ul>
          {items.map((task, index)=>(<li key={index}>{task}</li>))};
        </ul>
      </div>

    </div>
  );
}

export default App;
