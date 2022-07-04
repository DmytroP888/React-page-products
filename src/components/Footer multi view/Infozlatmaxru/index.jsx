import React from "react";
import "./Infozlatmaxru.css";

function Infozlatmaxru(props) {
  const { children, className } = props;

  return <div className={`text-100 montserrat-medium-white-18px ${className || ""}`}>{children}</div>;
}

export default Infozlatmaxru;
