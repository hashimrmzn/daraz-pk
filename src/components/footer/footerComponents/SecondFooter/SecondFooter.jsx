import React, { useContext } from "react";
import { Box, Stack, Typography } from "@mui/material";
import P1 from '../../../../../src/assets/images/p1.png'
import P2 from '../../../../../src/assets/images/p2.png'
import P3 from '../../../../../src/assets/images/p3.png'
import P4 from '../../../../../src/assets/images/p4.png'
import P5 from '../../../../../src/assets/images/p5.png'
import P6 from '../../../../../src/assets/images/p6.png'
import P7 from '../../../../../src/assets/images/p7.png'
import P8 from '../../../../../src/assets/images/p8.png'
import VarifiedIcon from '../../../../../src/assets/images/veriy-icon.png'
import { MobileScreenConext } from "../../../../context/MobileScreenContext";
function SecondFooter() {
    const isMobile = useContext(MobileScreenConext);
    return (
        <>
            <Box sx={{ backgroundColor: "#fff" }} className="second-footer" p={"20px 0"}>
                <div className='container'>

                    <Stack direction={isMobile ? "column": "row"} alignItems={"start"} gap={"30px"}>
                        <Stack className='payment-methods-icons' width={isMobile ? "100%": "26%"}>
                            <Typography variant='h3'>
                                Payment Methods
                            </Typography>
                            <Stack display={"flex"} flexDirection={"row"} gap={"10px"} flexWrap={"wrap"}>
                                <img src={P1} alt='payement method' />
                                <img src={P2} alt='payement method' />
                                <img src={P3} alt='payement method' />
                                <img src={P4} alt='payement method' />
                                <img src={P5} alt='payement method' />
                                <img src={P6} alt='payement method' />
                                <img src={P7} alt='payement method' />
                                <img src={P8} alt='payement method' />
         

                            </Stack>
                        </Stack>
                        <Stack className='payment-methods-icons' width={"fit-content"}>
                            <Typography variant='h3'>
                                Verified by
                            </Typography>
                            <Stack>
                                <img src={VarifiedIcon} alt='Varified By PCI' style={{width:"auto",height:"auto", objectFit:"unset"}}/>
                            </Stack>
                        </Stack>
                    </Stack>

                   
                </div>
            </Box>
        </>
    )
}

export default SecondFooter