import React from 'react'
import { Stack } from "@mui/material";
import FmenuOne from './firstFooterComponents/FmenuOne';
import FmenuSec from './firstFooterComponents/FmenuSec';
import FooterDownloadApp from './firstFooterComponents/FooterDownloadApp';
function FooterFirst() {
  return (
    <>
      <div className='container'>
        <Stack direction="row" justifyContent="space-between" width="100%" flexWrap={"wrap"} className='firstfooter' mt={"30px"} p={"30px 0"}>
          <FmenuOne />
          <FmenuSec />
          <FooterDownloadApp />
        </Stack>
      </div>
    </>
  )
}

export default FooterFirst