import React from "react";
import Group2 from "../../Group2";
import "./Group85.css";

function Group85(props) {
  const { number, text8, text9, group2Props } = props;

  return (
    <div className="group-85">
      <div className="overlap-group-6">
        <Group2 src={group2Props.src} />
        <div className="ellipse-5"></div>
        <div className="number-10 montserrat-medium-white-8px">{number}</div>
      </div>
      <div className="text-container-1">
        <div className="text-8 montserrat-medium-black-16px">{text8}</div>
        <div className="text-9 montserrat-medium-fuel-yellow-16px">{text9}</div>
      </div>
    </div>
  );
}

export default Group85;
