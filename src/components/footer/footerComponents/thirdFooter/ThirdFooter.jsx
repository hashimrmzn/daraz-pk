import React from 'react'
import { Box, Stack } from "@mui/material";
import ThirdLeftFooter from './thirdleftfooterComponents/ThirdLeftFooter';
import ThirdrightFooter from './thirdrightfooter/ThirdrightFooter';
function ThirdFooter() {
    return (
        <>
            <Box className="third-footer" sx={{p:"60px 0"}}>
                <div className='container'>
                    <Stack display={"flex"} flexDirection={"row"}>
                        <ThirdLeftFooter />
                        <ThirdrightFooter />
                    </Stack>
                </div>

            </Box>
        </>
    )
}

export default ThirdFooter