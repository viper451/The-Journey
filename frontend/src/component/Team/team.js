import React from "react";
import "./team.css";
import christiano from "../../assets/christiano.jpg";
import james from "../../assets/james.jpg";
import zidane from "../../assets/zidane.jpg";
import tonikroos from "../../assets/tonikroos.jpg";
import ikercasillas from "../../assets/ikercasillas.jpg";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
import nba from "../../assets/nba.png";
import twitter from "../../assets/twitter.png";
function Team(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "18vh",
        }}
      >
        <h2>
          Without bonding and coordination,every project is a failure. Look at
          who makes KICKSUP great. ;{")"}
        </h2>
      </div>
      <div className="row">
        <div className="column1">
          <div className="card">
            <img src={christiano} alt="" width={198} height={205} />

            <p className="title">Cristiano</p>
            <p>Financial Operation</p>
            <div style={{ margin: "24 px 0" }}>
              <img
                src={facebook}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px", paddingBottom: "5px" }}
              />
              <img
                src={insta}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px", paddingBottom: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={james} alt="" width={198} height={205} />

            <p className="title">James </p>
            <p>Product Designer</p>
            <div style={{ margin: "24 px 0" }}>
              <img
                src={medium}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
              <img
                src={nba}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
              <img
                src={twitter}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={ikercasillas} width={198} alt="" height={205} />

            <p className="title">Iker Casillas</p>
            <p>Marketing Stratergy</p>
            <div style={{ margin: "24 px 0" }}>
              <img
                src={medium}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={zidane} width={198} alt="" height={205} />

            <p className="title">Zidane</p>
            <p>Leadership & Management</p>
            <div style={{ margin: "24 px 0" }}>
              <img
                src={linkedin}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
              <img
                src={medium}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
              <img
                src={facebook}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
            </div>
          </div>
        </div>
        <div className="column1">
          <div className="card">
            <img src={tonikroos} width={198} alt="" height={205} />
            <p className="title">Toni Kross</p>
            <p>Product Developer</p>
            <div style={{ margin: "28 px 0" }}>
              <img
                src={linkedin}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
              <img
                src={medium}
                width={30}
                height={24}
                alt=""
                style={{ padding: "3px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "7vh",
        }}
      >
        <h2> AND YOU ;</h2>
      </div>
    </div>
  );
}

export default Team;
