import React from "react"
import "./Divider.css"

const Divider = ({ text }) => {
    return (
      <div className="divider-container">
        <div className="divider-border" />
        <span className="divider-content">
          {text}
        </span>
        <div className="divider-border" />
      </div>
    );
};

export default Divider;