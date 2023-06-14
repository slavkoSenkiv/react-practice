import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(e){
    const [value, name] = e.target;

    setContact(prevValue =>{
      if (name === 'fName') {
        return {
          fName : value,
          lName : prevValue.value,
          email : prevValue.value
        };
      } else if (name === 'lName') {
        return {
          fName : prevValue.value,
          lName : value,
          email : prevValue.value
        };
      } else if (name === 'email') {
        return {
          fName : prevValue.value,
          lName : prevValue.value,
          email : value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>

        <input 
          name="fName" 
          placeholder="First Name"
          onChange={handleChange} 
          value={contact.fName}
        />

        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleChange}
          value={contact.lName}
        />

        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange}
          value={contact.email}
        />

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
