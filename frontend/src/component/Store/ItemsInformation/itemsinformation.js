import React from 'react';
 import shoes from '../../../assets/shoe.jpg'
function Itemsinformation(props) {
    // console.log(props)
 
    return (
        <div>
            <h2><img src={`${props.information.link}`} width="70" height="50" alt="cam"/> </h2>
      

        </div>
    );
}

export default Itemsinformation;