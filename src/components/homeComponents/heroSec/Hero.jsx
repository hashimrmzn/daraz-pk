import { Stack } from '@mui/material'
import React, { useContext } from "react";
import HeroSlider from './heroComponents/HeroSlider'
import HeroRight from './heroComponents/heroRight/HeroRight'
import { MobileScreenConext } from "../../../context/MobileScreenContext";
function Hero() {
  const isMobile = useContext(MobileScreenConext);
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ width: "100%" }}
      >
        <Stack sx={{ width: isMobile ? "100%" : "83%" }}>
          <HeroSlider />
        </Stack>

        { !isMobile && <Stack sx={{ width: "17%" }}>
          <HeroRight />
        </Stack>}


      </Stack>
    </>
  )
}

export default Hero