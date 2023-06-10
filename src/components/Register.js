import React from "react";
import Input from "./Input";

function Form(){
    return(
        <form className="form">
        <Input type='text' placeholder='Some Name' />
        <Input type='password' placeholder='your pass here' />
        <Input type='password' placeholder='repeat password' />
        <button type="submit">Login</button>
    </form>
    )
}

export default Form;