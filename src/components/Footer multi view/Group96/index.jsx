import React from "react";
import "./Group96.css";

function Group96(props) {
  const { text18, spanText1, spanText2 } = props;

  return (
    <div className="group-96">
      <div className="text-87 montserrat-semi-bold-white-18px">{text18}</div>
      <div className="text-88 montserrat-medium-white-18px-3">
        <span className="montserrat-medium-white-18px">{spanText1}</span>
        <span className="montserrat-medium-fuel-yellow-18px">{spanText2}</span>
      </div>
    </div>
  );
}

export default Group96;
