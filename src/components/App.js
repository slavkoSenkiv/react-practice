import React, {useState} from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updFName(event){
    const firstName = event.target.value;
    setFName(firstName);
  }
  function updLName(event){
    const lastName = event.target.value;
    setLName(lastName);
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>

        <input 
          placeholder="First Name" 
          name="fName" 
          onChange={updFName} 
          value={fName} />

        <input 
          placeholder="Last Name" 
          name="lName" 
          onChange={updLName} 
          value={lName} />
          
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;