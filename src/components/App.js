import React from "react";

function App() {
  var isDone = false;
  const cross = {textDecoration: 'line-through'};
  return <p style={isDone ? cross : null}>buy milk</p>
}

export default App;
