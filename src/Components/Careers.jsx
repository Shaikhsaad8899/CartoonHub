import React from "react";
import "../Components/Landing.css";
export const Careers = () => {
  return (
    <div className="Landingdiv">
      <div className="header">
        <div className="logo">
          <h1>Movie City</h1>
        </div>
        <nav className="Navbar">
          <ul>
            <li>
              {" "}
              <a href="/Landing">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/About">About Us</a>{" "}
            </li>
            <li>
              {" "}
              <a href="/Careers">Careers</a>{" "}
            </li>
            
          </ul>
        </nav>
      </div>
      <div>
        <h1>This is Careers US</h1>
      </div>
    </div>
  );
};

//
