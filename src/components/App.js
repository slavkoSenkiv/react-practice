import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName(prevValue =>{
      if (inputName === 'fName'){
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === 'lName'){
        return {
          fName: prevValue.fName,
          lName: newValue
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>

        <input 
          placeholder="First Name" 
          name="fName" 
          onChange={handleChange} 
          value={fullName.fName} 
          />

        <input 
          placeholder="Last Name" 
          name="lName" 
          onChange={handleChange} 
          value={fullName.lName} 
          />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;