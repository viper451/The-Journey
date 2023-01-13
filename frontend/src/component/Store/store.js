import React, { useState } from "react";
import "./store.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import Itemsinformation from "./ItemsInformation/itemsinformation";
import AddtoCart from "./AddtoCart/AddtoCart";
import Displayinformation from "./DisplayInformation/displayinformation";

function Store(props) {
  const [info, setinfo] = useState([
    {
      name: "NIKE",
      index: "0",
      link: "/shoe.jpg",
      cost: "$30.00",
      rating: "4",
    },
    {
      name: "NIKE",
      index: "1",
      link: "/shoe1.png",
      cost: "$42.00",
      rating: "3",
    },
    {
      name: "ADIDAS",
      index: "2",
      link: "/shoe2.png",
      cost: "$38.99",
      rating: "4",
    },
    {
      name: "ADIDAS",
      index: "3",
      link: "/shoe3.png",
      cost: "$34.99",
      rating: "3",
    },
    {
      name: "REEBOK",
      index: "4",
      link: "/shoe2.png",
      cost: "$28.99",
      rating: "2",
    },
    {
      name: "REEBOK",
      index: "5",
      link: "/shoe4.png",
      cost: "$19.99",
      rating: "5",
    },
  ]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [cart, setCart] = useState([]);

  const getPrevious = () => {
    if (currentPage == 0) {
      setCurrentPage(5);
    } else {
      setCurrentPage(Math.abs(currentPage - 1) % 6);
    }
  };
  const getNext = () => {
    setCurrentPage(Math.abs(currentPage + 1) % 6);
  };
  // console.log(currentPage)
  const add = (updateData) => {
    let updatedCart = [...cart, updateData];
    setCart(updatedCart);
  };
  console.log(cart);

  return (
    <div>
      <div className="row">
        <div className="column" style={{ backgroundColor: "#bbb" }}>
          <h2
            sstyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "18vh",
            }}
          >
            SHOES
          </h2>
          {/* <p>{info[0].link} <img src={info[0].link}/></p> */}
          {/* {info.map((information) => (
          <Itemsinformation information={information}  />
        ))} */}
          <Itemsinformation information={info[currentPage]} />

          <b onClick={getPrevious} className="decrement">
            PREVIOUS <FaMinus />
          </b>
          <b onClick={getNext} className="increment">
            <FaPlus /> NEXT
          </b>

          <AddtoCart information={info[currentPage]} add={add} />
        </div>

        <div className="column">
          <h2>CART</h2>

          <Displayinformation cart={cart} />
          <button className="ordernow">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Store;
