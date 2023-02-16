import React from "react";
import "./TextInput.css";

const TextInput = ({label, placeholder, type}) => {
    return (
        <div className="text_input_container">
            <label className="text_input_label">{label}</label>
            <input type={type} className="text_input" placeholder={placeholder}/>
        </div>
    )
}

export default TextInput;