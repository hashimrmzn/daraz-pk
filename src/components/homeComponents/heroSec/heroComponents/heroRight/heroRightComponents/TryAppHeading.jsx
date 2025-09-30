import { Stack, Typography } from '@mui/material'
import React from 'react'
import FavIcon from "../../../../../../assets/images/fav-icon.avif"; 
function TryAppHeading() {
    return (
        <>
            <Stack direction={"row"}  alignItems={"center"} spacing={1}
>
                <img
                    src={FavIcon} alt="Daraz Clone Logo"
                    style={{ width: "25px", height: "auto" }} />

                <Typography variant='h6' sx={{ color: "#6c1d00", fontWeight: "600" }}>
                    TRY DARAZ APP
                </Typography>
            </Stack>
        </>
    )
}

export default TryAppHeading