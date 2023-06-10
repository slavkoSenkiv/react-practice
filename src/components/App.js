import React from "react";
import Login from "./Login";
import Register from './Register';

const isLoggedIn = true;

function App() {
  return <div className="container">{isLoggedIn ? <Login/> : <Register/>}</div>;
}

export default App;
