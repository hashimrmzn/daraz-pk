import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
import ThirdLeftFooter from './thirdleftfooterComponents/ThirdLeftFooter';
import ThirdrightFooter from './thirdrightfooter/ThirdrightFooter';
import { MobileScreenConext } from "../../../../context/MobileScreenContext";
function ThirdFooter() {
     const isMobile = useContext(MobileScreenConext);
    return (
        <>
            <Box className="third-footer" sx={{p:"60px 0"}}>
                <div className='container'>
                    <Stack display={"flex"} flexDirection={isMobile ? "column": "row"}>
                        <ThirdLeftFooter />
                        <ThirdrightFooter />
                    </Stack>
                </div>

            </Box>
        </>
    )
}

export default ThirdFooter