import React, { useContext } from "react";
import { Stack } from "@mui/material";
import FmenuOne from './firstFooterComponents/FmenuOne';
import FmenuSec from './firstFooterComponents/FmenuSec';
import FooterDownloadApp from './firstFooterComponents/FooterDownloadApp';
import { MobileScreenConext } from "../../../../context/MobileScreenContext";
function FooterFirst() {
  const isMobile = useContext(MobileScreenConext);
  return (
    <>
      <div className='container'>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          width="100%"
          flexWrap="wrap"
          className="firstfooter"
          mt="30px"
          p="30px 0"
        >
          <FmenuOne />
          <FmenuSec />
          <FooterDownloadApp />
        </Stack>
      </div>
    </>
  )
}

export default FooterFirst