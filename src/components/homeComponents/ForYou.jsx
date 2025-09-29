import React from 'react'
import { Typography, Stack} from '@mui/material'
import AllProducts from '../AllProducts'
function ForYou() {
    return (
        <>
            <Stack mt={2}>
                <Typography variant='h4' sx={{ color: "#424242" }}>
                    Just For You
                </Typography>
            </Stack>
            <AllProducts />
        </>
    )
}

export default ForYou