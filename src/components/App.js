import React, {useState} from "react";

function App() {
  //let count = 0;
  const state = useState(321);

  function increase(){
    //count++;
    //console.log('I got clicked, count = ', count);
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  )
    
}

export default App;
