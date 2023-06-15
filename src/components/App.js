import React, { useState } from "react";

function App() {

  const currArr = [1, 2];

  const [newArr, setNewArr] = useState(currArr);
  const [newTask, setNewTask] = useState("");

  function handleInput(e){
    setNewTask(e.target.value);
  }

  function handleItemSave(){
    setNewArr([...newArr, newTask]);
    setNewTask("")
  }

  return (
    <div className="container">

      <div className="heading"><h1>To-Do List</h1></div>

      <div className="form">

        <input 
          type="text"
          name='newTask'
          value={newTask}
          onChange={handleInput}
        />

        <button>
          <span onClick={handleItemSave}>Add</span>
        </button>

      </div>

      <div>
        <ul>
          {newArr.map((task, index)=>(<li key={index}>{task}</li>))};
        </ul>
      </div>

    </div>
  );
}

export default App;
