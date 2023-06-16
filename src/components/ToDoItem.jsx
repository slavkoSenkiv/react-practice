import React from "react";

function ToDoItem(props){

    function handleClick(){    }
    return (
        <div onClick={()=>props.onChecked(props.id)}>
            <li key={props.key}>{props.text}</li>
        </div>
    )
};

export default ToDoItem; 