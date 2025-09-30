import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../../../assets/images/logo.png"; 

function Logo() {
  return (
    <div className="logo-box">
      <Link to="/">
        <img 
          src={logo} 
          alt="Daraz Clone Logo" 
          style={{ width: "130px", height: "auto" }} 
        />
      </Link>
    </div>
  );
}

export default Logo;
