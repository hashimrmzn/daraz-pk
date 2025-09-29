import React from "react";
import { Link } from "react-router-dom"; 


function Logo() {
  return (
    <div className="logo-box">
      <Link to="/">
        <img 
          src="/logo.png" alt="Daraz Clone Logo" 
          style={{ width: "130px", height: "auto" }} 
        />
      </Link>
    </div>
  );
}

export default Logo;
