import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    event.target.name === 'fName'
      ? setFullName({fName: event.target.value, lName: fullName.lName})
      : setFullName({lName: event.target.value, fName: fullName.fName})
  };

  return (
    <div className="container">

      <h1>Hello {fullName.fName} {fullName.lName}</h1>

      <form>

        <input 
          placeholder="First Name" 
          onChange={handleChange}
          name="fName"
          value={fullName.fName}
        />

        <input 
          placeholder="Last Name" 
          onChange={handleChange}
          name="lName"
          value={fullName.lName}
        />

        <button>Submit</button>

      </form>

    </div>
  );
}

export default App;