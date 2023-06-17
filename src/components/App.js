import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  
const taskArr = ['first task', 'second task'];

const [newArr, setNewArr] = useState(taskArr);
const [newTask, setNewTask] = useState("");

function handleChange(event){
  setNewTask(event.target.value);
}

function addNewTask(){
  setNewArr(prevArr => [...prevArr, newTask]);
  setNewTask("");
}

function deleteTask(id){
  setNewArr(prevArr=>{
    return prevArr.filter((task, index)=>{
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
        <input 
          type="text"
          onChange={handleChange}
          value={newTask}
        />
        <button onClick={addNewTask}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {newArr.map((task, index)=>(
            <ToDoItem 
              text={task}
              onChecked={deleteTask}
              id={index}
            />
          ))};
        </ul>
      </div>

    </div>
  );
}

export default App;
