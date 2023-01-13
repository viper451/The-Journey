import React from "react";
import "./itemsinformation.css";
import { FaStar } from "react-icons/fa";
function Itemsinformation(props) {
  // console.log(props)

  return (
    <div>
      <h2>
        <img
          src={`${props.information.link}`}
          className="picinfo"
          width={700}
          height={350}
          alt="cam"
        />{" "}
      </h2>
      <h3>BRAND NAME :{props.information.name}</h3>
      <h3>COST :{props.information.cost}</h3>
      <h3>
        RATING :<FaStar style={{ color: "yellow" }} />{" "}
        <FaStar style={{ color: "yellow" }} />{" "}
        <FaStar style={{ color: "yellow" }} />{" "}
        <FaStar style={{ color: "yellow" }} />
      </h3>
    </div>
  );
}

export default Itemsinformation;
