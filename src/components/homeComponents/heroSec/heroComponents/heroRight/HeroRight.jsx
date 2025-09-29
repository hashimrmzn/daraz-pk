import React from 'react'
import TryAppHeading from './heroRightComponents/TryAppHeading'
import { Stack,Typography } from '@mui/material'
import AppDownload from './heroRightComponents/AppDownload'
import DarazAppDownload from './heroRightComponents/DarazAppDownload'
function HeroRight() {
    return (
        <>
            <Stack sx={{ background: "linear-gradient(to right, #ffff, #ffefe6)" ,p:"10px"}}>
                <TryAppHeading />
                   <AppDownload />
                   <DarazAppDownload />
                    <Typography sx={{color:"#2e3346", fontSize:"10px",mt:"6px",fontWeight:"600"}}>
                    Download the App Now!
                </Typography>
            </Stack>
         

        </>
    )
}

export default HeroRight