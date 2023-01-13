import React, { useState } from "react";
import axios from "axios";
import shoe from "../../assets/shoe.jpg";
import "./product.css";
import shoe1 from "../../assets/shoe2.png";
function Product(props) {
  const store = () => {
    window.location.href = "/store";
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>
            Nike <span className="style">Shoes</span>
          </h1>

          <p>
            Nike, Inc. is an American multinational corporation that is <br />
            engaged in the design, development, manufacturing, and worldwide{" "}
            <br />
            marketing and sales of footwear, apparel, equipment, accessories,
            <br /> and services.
          </p>
          <div className="text">
            <button className="btn" onClick={store}>
              Buy Now
            </button>
            {/* <div className="social-media">
                    <a href=""><i className="fa icons fa-facebook"></i></a>
                    <a href=""><i className="fa icons fa-instagram"></i></a>
                    <a href=""><i className="fa icons fa-twitter"></i></a>
                </div> */}
          </div>
        </div>

        {/* <img src={shoe}  className="image" id='pic1' width={198} height={205}/> */}

        <div className="pic" id="pic2" />
        <div className="pic" id="pic1" />

        {/* <div className='container1'>
        <div className='pic' id='pic3' />
        <div className='pic' id='pic2' />
        <div className='pic' id='pic1' />
      </div> */}
      </div>
    </div>
  );
}

export default Product;
