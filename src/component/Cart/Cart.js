import React from "react";
import Selected from "../Selected/Selected";
import "./Cart.css";

const Cart = (props) => {
 // console.log(props.cart);

 let totalCost = 0;
 for (const band of props.cart) {
  totalCost = totalCost + band.cost;
 }
 return (
  <div>
   <div
    className="card text-white bg-dark mb-3 p-2"
    style={{ maxWidth: "18rem" }}
   >
    <div className="card-header">Hiring details</div>
    <div className="card-body">
     <h5 className="card-title">Band added: {props.cart.length}</h5>
     <p className="card-text">Total Cost: {totalCost}$</p>
    </div>
    <button className="btn-regular">Checkout</button>
   </div>
   <div>
    <h4>Added Bands: </h4>
    {props.cart.map((selected) => (
     <Selected key={selected.id} selected={selected}></Selected>
    ))}
   </div>
  </div>
 );
};

export default Cart;
