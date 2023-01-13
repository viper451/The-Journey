import React from "react";

function Displayinformation({ cart }) {
  console.log(cart);
  return (
    <div>
      {cart.map((item, key) => {
        return (
          //   <tr key={key}>
          //   <td>{item.name}</td>
          //   <td><img src={`${item.link}`} width="70" height="50" alt="cam"/> </td>
          //   <td>{item.cost}</td>
          // </tr>
          <table className="gfg">
            <tr key={key}>
              {/* <td class = "geeks"></td> */}
              <td className="geeks">{item.name} &nbsp; &nbsp; &nbsp;</td>
              <td>
                <img src={`${item.link}`} width="70" height="50" alt="cam" />
                &nbsp;&nbsp;&nbsp;{" "}
              </td>
              <td>{item.cost}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default Displayinformation;
