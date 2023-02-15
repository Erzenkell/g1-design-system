import React from "react";
import "./TextInput.css";

const TextInput = ({label, placeholder}) => {
    return (
        <div className="text_input_container">
            <label>{label}</label>
            <input type="text" className="text_input" placeholder={placeholder}/>
        </div>
    )
}

export default TextInput;