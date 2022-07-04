import React from "react";
import Infozlatmaxru from "../Infozlatmaxru";
import "./Group75.css";

function Group75(props) {
  const { text29, text30, text32, infozlatmaxru1Props, infozlatmaxru2Props, infozlatmaxru3Props } = props;

  return (
    <div className="group-75">
      <div className="text-98 montserrat-semi-bold-white-18px">{text29}</div>
      <Infozlatmaxru>{infozlatmaxru1Props.children}</Infozlatmaxru>
      <div className="text-5 montserrat-medium-white-18px">{text30}</div>
      <div className="text-5 montserrat-medium-white-18px">{text32}</div>
      <Infozlatmaxru className={infozlatmaxru2Props.className}>{infozlatmaxru2Props.children}</Infozlatmaxru>
      <Infozlatmaxru className={infozlatmaxru3Props.className}>{infozlatmaxru3Props.children}</Infozlatmaxru>
    </div>
  );
}

export default Group75;
