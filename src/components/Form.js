import React from "react";
import Input from "./Input";

function Form(props){
    return(
        <form className="form">
        <Input type='text' placeholder='Some Name' />
        <Input type='password' placeholder='your pass here' />
        {/* {props.userStatus && <Input type='password' placeholder='repeat password' />} */}
        {!props.userStatus && <Input type='password' placeholder='repeat password' />}
        <button type="submit">Login</button>
    </form>
    )
}

export default Form;