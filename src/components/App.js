import React from "react";
import Form from "./Form";

//const newUser = false;
const existingUser = true;

function App() {
  return (
    <div className="container">
      {/* {<Form userStatus={newUser}/>} */}
      {<Form userStatus={existingUser}/>}
    </div>
  )
}

export default App;