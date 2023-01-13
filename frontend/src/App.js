import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/register";
import Contact from "./component/Contact/contact";
import Team from "./component/Team/team";
import Navbar from "./component/Navbar/navbar";
import Product from "./component/Product/product";
import Store from "./component/Store/store";
import Journey from "./component/TheJourney/journey";
const App = () => {
  const [UserName, setUserName] = useState(localStorage.getItem("name"));
  console.log(UserName);
  return (
    <div>
      {UserName != null && <Navbar />}

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          {UserName != null && (
            <Route path="/contactus" exact element={<Contact />} />
          )}
          {UserName != null && <Route path="/team" exact element={<Team />} />}
          {UserName != null && (
            <Route path="/product" exact element={<Product />} />
          )}
          {UserName != null && (
            <Route path="/store" exact element={<Store />} />
          )}
          {UserName != null && (
            <Route path="/journey" exact element={<Journey />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
