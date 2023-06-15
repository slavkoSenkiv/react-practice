import React, { useState } from "react";

function App() {

  const [newArr, updArr] = useState([1, 2]);
  const [newTask, setNewTask] = useState("");

  function addToList(){
    updArr(prevArr=>[...prevArr, newTask]);
    setNewTask("");
  }

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">

        <input 
          type="text" 
          name="newTask" 
          value={newTask}
          onChange={handleInputChange}
        />

        <button>
          <span onClick={addToList}>Add</span>
        </button>

      </div>

      <div>
        <ul>
          {newArr.map((task, index) => (
            <li key={index}>{task}</li>
          ))};
        </ul>
      </div>

    </div>
  );
}

export default App;
