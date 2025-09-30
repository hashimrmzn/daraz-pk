import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import TopHeader from "./headerComponents/TopHeader";
import BottomHeader from "./headerComponents/BottomHeader";
import { MobileScreenConext } from "../../context/MobileScreenContext";
import MobileHeader from "./headerComponents/mobileHeaderComponents/MobileHeader";

function Header() {
  const  isMobile  = useContext(MobileScreenConext);

  return (
    <AppBar 
      position="sticky"  
      elevation={0}  
      sx={{  backgroundColor: isMobile ? "transparent" : "#f85606", paddingBottom:"10px" }}
    >
     {isMobile && <MobileHeader />}
      <div className="container">
        {!isMobile && <TopHeader />}
        {!isMobile && <BottomHeader />}
       
      </div>
    </AppBar>
  );
}

export default Header;
