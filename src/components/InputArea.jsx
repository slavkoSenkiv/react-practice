import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChanging} type="text" value={props.value} />
      <button onClick={props.onAdding}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
