import React from "react";
import AppBar from "@mui/material/AppBar";
import TopHeader from "./headerComponents/TopHeader";
import BottomHeader from "./headerComponents/BottomHeader";


function Header() {
  return (
    <AppBar position="sticky"  elevation={0}  sx={{ backgroundColor: "#f85606",paddingBottom:"10px" }}>
      <div className="container">
       <TopHeader />
       <BottomHeader />
      </div>
    </AppBar>
  );
}

export default Header;
