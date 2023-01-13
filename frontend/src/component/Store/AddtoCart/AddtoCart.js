import React from "react";
import { FaShoppingCart } from "react-icons/fa";
function AddtoCart({ information, add }) {
  // console.log(information)
  return (
    <div>
      <b onClick={() => add(information)}>
        {" "}
        <FaShoppingCart />
        ADD TO CART
      </b>
    </div>
  );
}

export default AddtoCart;
