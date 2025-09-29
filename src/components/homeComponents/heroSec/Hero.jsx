import { Stack } from '@mui/material'
import React from 'react'
import HeroSlider from './heroComponents/HeroSlider'
import HeroRight from './heroComponents/heroRight/HeroRight'

function Hero() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ width: "100%" }}
      >
        <Stack sx={{ width: "83%" }}>
          <HeroSlider />
        </Stack>
        <Stack sx={{ width: "17%" }}>
          <HeroRight />
        </Stack>

      </Stack>
    </>
  )
}

export default Hero