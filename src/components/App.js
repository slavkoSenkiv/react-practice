import React from "react";
import Form from "./Form";

const currentTime = new Date().getHours();


function App() {
  //return <div className="container">{currentTime > 18 ? <h1>Why are you still working?</h1> : <h1>How long are you going to work?</h1>}</div>;
  return <div className="container">{currentTime > 12 && <h1>Why are you still working?</h1>}</div>;
}

export default App;
