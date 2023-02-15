import React from "react";
import "./Button.css";

const Button = ({label}) => {
    const onClickButton = () => {
        console.log("Button clicked");
    }

    return (
        <div className="Button" onClick={onClickButton}>
            {label}
        </div>
    )
}

export default Button;