import React,{useState,useEffect} from 'react';
import './navbar.css'
import websitelogo from '../../assets/websitelogo.png';
import {FaUsers} from  'react-icons/fa'; 
function Navbar(props) {
    const [UserName, setUserName] = useState(localStorage.getItem("name"))
    return (
        <div>
            <ul className="topnav">
            <img src={websitelogo}   width={1} className="logo"/>
  <li><a href="/product">PRODUCT</a></li>
  <li><a href="/thejourney">THE JOURNEY</a></li>
  <li><a href="/team">TEAM</a></li>
  <li><a href="/store">STORE</a></li>
  <li><a href="/contactus">CONTACT</a></li>
  <div className="account"><h3><FaUsers/>  {UserName} </h3></div>

</ul>
        </div>
    );
}

export default Navbar;