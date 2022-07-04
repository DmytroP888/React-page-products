import React from "react";
import "./Group1.css";

function Group1(props) {
  const { phone, text98 } = props;

  return (
    <div className="group-1-1">
      <div className="phone-1 montserrat-semi-bold-black-18px">{phone}</div>
      <div className="text-229 montserrat-bold-fuel-yellow-18px">{text98}</div>
    </div>
  );
}

export default Group1;
