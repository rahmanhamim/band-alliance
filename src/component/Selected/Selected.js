import React from "react";
import "./Selected.css";

const Selected = (props) => {
 const { name, img } = props.selected;

 return (
  <div className="selected-bands">
   <ul>
    <li>{name} </li>
    <img className="selected-band-img" src={img} alt="" />
   </ul>
  </div>
 );
};

export default Selected;
