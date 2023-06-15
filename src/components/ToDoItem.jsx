import React, { useState } from "react";

function ToDoItem(props){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked);
    }
    return (
        <li 
            key={props.key}
            onClick={handleClick}
            style={{textDecoration: clicked ? 'line-through' : ""}}
            // another way style={clicked ? {textDecoration: 'line-through'} : {}}
        >
        {props.text}</li>
    );
};

export default ToDoItem;