import React from 'react'
import { Typography, Stack } from '@mui/material'
import CategoriesWithProducts from '../CategoriesWithProducts'

function ShowCategories() {
    return (
        <>
            <Stack mt={2}>
                <Typography variant='h4' sx={{ color: "#424242" }}>
                   Categories
                </Typography>
            </Stack>
            <CategoriesWithProducts />

        </>
    )
}

export default ShowCategories