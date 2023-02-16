import React from "react";
import "./Button.css";

import COLORS from "../../assets/colors/Colors.js";

const Button = ({label, colorFamily, color}) => {
    const onClickButton = () => {
        console.log("Button clicked");
    }

    const buttonColor = COLORS[colorFamily][color];
    console.log(buttonColor);

    return (
        <div className="Button" onClick={onClickButton} style={{'backgroundColor': `${buttonColor}`}}>
            {label}
        </div>
    )
}

export default Button;