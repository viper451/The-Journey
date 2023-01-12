import React from 'react';
import grasspic from '../../assets/grasspic.jpg';
import './journey.css'
function Journey(props) {
    return (
        <div>
            <div >
            <img src={grasspic} className='grass' />
            <b className="first-txt">
            THE JOURNEY
        </b>
        <div className="vl"></div>
            </div>
        </div>
    );
}

export default Journey;