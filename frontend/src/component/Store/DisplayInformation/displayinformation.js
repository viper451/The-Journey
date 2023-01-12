import React from 'react';

function Displayinformation({cart}) {
    console.log(cart)
    return (
        <div>
             {cart.map((item,key)=>
               { 
                return(
                <tr key={key}>
                <td>{item.name}</td>
                <td><img src={`${item.link}`} width="70" height="50" alt="cam"/> </td>
                <td>{item.cost}</td>
              </tr>
                
                )})}
         
                            
            
        </div>
    );
}

export default Displayinformation;