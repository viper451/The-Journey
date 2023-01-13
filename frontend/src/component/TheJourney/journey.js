import React from "react";
import grasspic from "../../assets/grasspic.jpg";
import "./journey.css";
function Journey(props) {
  return (
    <div>
      <div className="journeynackground">
        <img src={grasspic} className="grass" />
        <b className="first-txt">THE JOURNEY</b>
        <div className="vl"></div>
        <div className="info">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!.
          Lorem ipsum dolor sit consectetur adipisicing elit. Neque, odio! Lorem
          ipsum dolor sit ametconsectetur adipisicing elit. Neque, odio!
        </div>

        <div className="info1">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!.
          Lorem ipsum dolor sit consectetur adipisicing elit. Neque, odio! Lorem
          ipsum dolor sit ametconsectetur adipisicing elit. Neque, odio!. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!. Lorem
          ipsum dolor sit consectetur adipisicing elit. Neque, odio! Lorem ipsum
          dolor sit ametconsectetur adipisicing elit. Neque, odio!
        </div>

        <div className="info2">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!.
          Lorem ipsum dolor sit consectetur adipisicing elit. Neque, odio! Lorem
          ipsum dolor sit ametconsectetur adipisicing elit. Neque, odio!
        </div>
      </div>
    </div>
  );
}

export default Journey;
