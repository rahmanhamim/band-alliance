import React from "react";
import logo from "../../images/icon.png";
import "./Header.css";

const Header = () => {
 return (
  <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     <a className="navbar-brand nav-logo" href="/home">
      <img className="logo" src={logo} alt="" />
      Band Alliance
     </a>
     <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
     >
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/4">
         Home
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/4">
         About
        </a>
       </li>
      </ul>

      <button className="btn-regular" type="submit">
       Login
      </button>
     </div>
    </div>
   </nav>
   <div className="display-section  py-4 mx-auto text-center">
    <h1>
     Your next <span className="highlight-text">concert</span> starts here
    </h1>
    <h3>
     <span className="highlight-text">Total </span> Budget : 5000000$
    </h3>
    <div className="d-flex justify-content-center">
     <input
      placeholder="Hire your favourite band"
      className="w-25 search-input"
      type="text"
     />{" "}
     <button className="btn-search">Search</button>
    </div>
   </div>
  </div>
 );
};

export default Header;
