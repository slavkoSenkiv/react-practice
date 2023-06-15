import React, { useState } from "react";

function ToDoItem(props){
    return (
        <div>
            <ul>
                {props.items.map((todoItem, index)=>(
                    <li key={index}>{todoItem}</li>
                ))};
            </ul>
        </div>
    );
};

export default ToDoItem;