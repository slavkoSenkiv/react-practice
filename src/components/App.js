import React, {useState} from "react";

/* //Challenge:
//1. Given that you can get the current time using:
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000); */


function App() {

  const time = new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: "numeric", 
    minute: "numeric",
    second: "numeric"
  });

  const [currentTime, setCurrentTime] = useState(time);

  function updTime(){
    const newTime = new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: "numeric", 
      minute: "numeric",
      second: "numeric"
    });

    setCurrentTime(newTime);
  }

  setInterval(updTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updTime}>Get Time1</button>
    </div>
  );
}

export default App;
