import React, { useEffect, useState } from "react";
import Band from "../Band/Band";
import Cart from "../Cart/Cart";
import "./Content.css";

const Content = () => {
 const [bands, setBands] = useState([]);
 const [cart, setCart] = useState([]);

 useEffect(() => {
  fetch("./bands.JSON")
   .then((res) => res.json())
   .then((data) => setBands(data));
 }, []);

 const handleHireBtn = (band) => {
  const newCart = [...cart, band];
  setCart(newCart);
 };

 return (
  <div className="container">
   <div className="row">
    <div className="bands-section py-3 col-md-9">
     <div className="row row-cols-1 row-cols-md-3 g-4">
      {bands.map((band) => (
       <Band key={band.id} band={band} handleHireBtn={handleHireBtn}></Band>
      ))}
     </div>
    </div>
    <div className="cart-section bands-section col-md-3 py-3">
     <Cart cart={cart}></Cart>
    </div>
   </div>
  </div>
 );
};

export default Content;
