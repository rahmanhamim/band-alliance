import React from "react";
import "./Band.css";

const Band = (props) => {
 // console.log(props.band);
 const { name, origin, genre, formedYear, cost, img } = props.band;

 return (
  <div className="col">
   <div className="card h-100 ">
    <div className="img-card">
     <img src={img} className="card-img-top " alt="..." />
    </div>
    <div className="card-body">
     <h5 className="card-title">{name}</h5>
     <p>Gener: {genre}</p>
     <p>Country: {origin}</p>
     <p>Established: {formedYear}</p>
     <h6>
      Hiring Cost: <b>{cost}</b>$
     </h6>
    </div>
    <div className="card-footer">
     <button
      className="hire-btn"
      onClick={() => props.handleHireBtn(props.band)}
     >
      <i style={{ color: "#686868" }} className="fas fa-plus-square"></i> Hire
     </button>
    </div>
   </div>
  </div>
 );
};

export default Band;
