import React from 'react'
import { Stack } from "@mui/material";
import FooterFirst from './footerComponents/firstFooter/FooterFirst';
import SecondFooter from './footerComponents/SecondFooter/SecondFooter';
import ThirdFooter from './footerComponents/thirdFooter/ThirdFooter';
import FourthFooter from './footerComponents/FourthFooter';
function Footer() {
  return (
    <>
      <footer>
       
        <Stack>
          <FooterFirst />
          <SecondFooter />
          <ThirdFooter />
          <FourthFooter />
        </Stack>
        
      </footer>
    </>
  )
}

export default Footer