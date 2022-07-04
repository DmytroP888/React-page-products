import React from "react";
import "./Group2.css";

function Group2(props) {
  const { src } = props;

  return (
    <div className="group-2-1">
      <img alt="" className="icon-cart" src={src} />
      <div className="ellipse-container">
        <div className="ellipse-1 border-1-5px-black"></div>
        <div className="ellipse-2 border-1-5px-black"></div>
      </div>
    </div>
  );
}

export default Group2;
