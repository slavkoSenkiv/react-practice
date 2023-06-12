import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");

  function handleChange(event){
    //console.log('changed');
    console.log(event.target.value);
    setName(inputValue);
  }

  const inputValue = document.getElementsByTagName('input')[0].value;

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input 
        //onChange={handleChange}
        //value={name}
        type="text" 
        placeholder="What's your name?" />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
};

export default App;