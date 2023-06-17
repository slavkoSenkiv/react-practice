import React from "react";

function ToDoItem(props) {

  function deleteItem(id) {
    props.setItemsArr(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return <li onClick={()=>{deleteItem(props.id)}}>{props.text}</li>;
}

export default ToDoItem;