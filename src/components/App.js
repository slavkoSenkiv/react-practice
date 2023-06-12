import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState('Hello1');
  const [isHovered, setIsHovered] = useState(false);

  function handleClick(){
    console.log('clicked');
    setHeadingText('Submited');
  };


  const styles = {
    backgroundColor : isHovered ? 'black' : 'white',
    color : isHovered ? 'white' : 'black'
  };


  function handleMouseOver(){
    setIsHovered(true);

  };
  function handleMouseOut(){
    setIsHovered(false);
  };


  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
        onClick={handleClick} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: styles.backgroundColor, 
          color: styles.color}}>
            Submit
      </button>
    </div>
  );
};

export default App;