import React from "react";
import "./Button.css";

import COLORS from "../../assets/colors/Colors.js";

const Button = ({label, colorFamily, color, type}) => {
    const onClickButton = () => {
        console.log("Button clicked");
    }

    const buttonColor = COLORS[colorFamily][color];

    const buttonRadius = type === "round" ? "39px" : "0";

    return (
        <div className="Button" onClick={onClickButton} style={{'backgroundColor': `${buttonColor}`, 'borderRadius': buttonRadius}}>
            {label}
        </div>
    )
}

export default Button;