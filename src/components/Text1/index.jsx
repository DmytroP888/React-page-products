import React from "react";
import "./Text1.css";

function Text1(props) {
  const { children } = props;

  return <h1 className="text-78 montserrat-bold-licorice-24px">{children}</h1>;
}

export default Text1;
