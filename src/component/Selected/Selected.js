import React from "react";
import "./Selected.css";

const Selected = (props) => {
 console.log(props.selected);
 return (
  <div className="selected-bands">
   <ul>
    <li>{props.selected.name} </li>
    <img className="selected-band-img" src={props.selected.img} alt="" />
   </ul>
  </div>
 );
};

export default Selected;
