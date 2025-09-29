import React from 'react'
import bgImage from "../../../../../../assets/images/try-app-bg.png";
import star from "../../../../../../assets/images/star.avif";
import shipicon from "../../../../../../assets/images/shipicon.avif";
import vouchericon from "../../../../../../assets/images/vouchericon.avif";
import { Box, Stack, Typography } from '@mui/material'
function AppDownload() {
    return (
        <>
            <Box
                sx={{
                    mt: "5px",
                    maxWidth: "100%",
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    minHeight: "160px",
                    p: "5px",
                    backgroundPosition: "center",
                }}>
                <Typography sx={{ fontSize: "10px", color: "#fff" }}>
                    <span>
                        <img src={star} alt='start icon' style={{ height: "10px", width: "10px", margin: "0 5px 0 0" }} />
                    </span>
                    4.8 Rated
                </Typography>

                <Typography
                    variant='h5'
                    sx={{
                        mt: "10px",
                        fontSize: "12px",
                        color: "#fff",
                        textAlign: "center"
                    }}>
                    Download the App now
                </Typography>
                <Stack sx={{ pl: "30px" }}>
                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                        <img src={shipicon} alt='shipicon ' style={{ height: "36px", width: "36px" }} />
                        <Typography
                            variant='h5'
                            sx={{
                                mt: "14px",
                                fontSize: "16px",
                                color: "#fff",
                                fontWeight: "500",
                            }}
                        >
                            Free Shipping
                        </Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"10px"}>
                        <img src={vouchericon} alt='vouchericon ' style={{ height: "36px", width: "36px" }} />
                        <Typography
                            variant='h5'
                            sx={{
                                mt: "14px",
                                fontSize: "16px",
                                color: "#fff",
                                fontWeight: "500",
                            }}
                        >
                            Exclusive Vouchers
                        </Typography>
                    </Stack>
                </Stack>
                
               
            </Box>

        </>
    )
}

export default AppDownload