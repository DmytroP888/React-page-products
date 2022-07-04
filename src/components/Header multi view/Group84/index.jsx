import React from "react";
import Group1 from "../../Group1";
import "./Group84.css";

function Group84(props) {
  const { text217, group, x_, group1Props } = props;

  return (
    <div className="group-84">
      <img alt="" className="icon-location_pin" src={x_} />
      <div className="text-228 montserrat-semi-bold-black-18px">{text217}</div>
      <Group1 phone={group1Props.phone} text98={group1Props.text98} />
      <img alt="" className="group-17" src={group} />

    </div>
  );
}

export default Group84;
