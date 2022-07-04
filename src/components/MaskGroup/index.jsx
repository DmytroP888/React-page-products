import React from "react";
import "./MaskGroup.css";

function MaskGroup(props) {
  const { src, className } = props;

  return <img alt="" className={`mask-group ${className || ""}`} src={src} />;
}

export default MaskGroup;
