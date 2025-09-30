import React, { useContext } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pak from '../../../../src/assets/images/pak.png'
import Bangal from '../../../../src/assets/images/bangal.png'
import Sri from '../../../../src/assets/images/sri.png'
import Myanmar from '../../../../src/assets/images/Myanmar.png'
import Nep from '../../../../src/assets/images/nep.png'
import Fb from '../../../../src/assets/images/fb.png'
import Twitter from '../../../../src/assets/images/twitter.png'
import Insta from '../../../../src/assets/images/insta.png'
import Yt from '../../../../src/assets/images/yt.png'
import W from '../../../../src/assets/images/w.png'
import { MobileScreenConext } from "../../../context/MobileScreenContext";
function FourthFooter() {
    const isMobile = useContext(MobileScreenConext);
    return (
        <>
            <Box sx={{ backgroundColor: "#fff" }} p={"40px 0"}>
                <div className='container'>
                    <Stack direction={isMobile ? "column" : "row"} alignItems={"start"} justifyContent={"space-between"} gap={"20px"}>
                        <Stack width={isMobile ?"100%" :"40%"}>
                            <Typography variant='h4' sx={{ color: "#2a2a2a", fontWeight: "300", fontSize: "16px !important", mb: "10px" }}>
                                Daraz International
                            </Typography>
                            <Stack direction="row" alignItems={"start"} justifyContent={"space-between"} flexWrap={"wrap"} className='footer-all-countries'>
                                <div>
                                    <a href='#.'>
                                        <img src={Pak} alt='Pakistan'/>
                                        <span>Pakistan</span>
                                    </a>
                                </div>

                                <div>
                                    <a href='#.'>
                                        <img src={Bangal} alt='Bangladesh'/>
                                        <span>Bangladesh</span>
                                    </a>
                                </div>


                                <div>
                                    <a href='#.'>
                                        <img src={Sri} alt='Sri Lanka'/>
                                        <span>Sri Lanka</span>
                                    </a>
                                </div>


                                <div>
                                    <a href='#.'>
                                        <img src={Myanmar} alt='Myanmar'/>
                                        <span>Myanmar</span>
                                    </a>
                                </div>

                                <div>
                                    <a href='#.'>
                                        <img src={Nep} alt='Nepal'/>
                                        <span>Nepal</span>
                                    </a>
                                </div>
                            </Stack>
                        </Stack>

                        <Stack width={isMobile ?"100%" :"20%"}>
                            <Typography variant='h4' sx={{ color: "#2a2a2a", fontWeight: "300", fontSize: "16px !important", mb: "10px" }}>
                               Follow Us
                            </Typography>
                            <Stack direction="row" gap={"20px"} alignItems={"start"} justifyContent={isMobile ?"start" :"space-between"} flexWrap={"wrap"} className='footer-all-countries'>
                                <div>
                                    <a href='#.'>
                                        <img src={Fb} alt='facebook'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='#.'>
                                        <img src={Twitter} alt='Twitter'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='#.'>
                                        <img src={Insta} alt='Instagram'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='#.'>
                                        <img src={Yt} alt='Youtube'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='#.'>
                                        <img src={W } alt='Daraz Blogs'/>
                                    </a>
                                </div>

                       
                            </Stack>
                        </Stack>

                        <div>
                            <Typography sx={{ color:"#606060",fontSize:"14px", fontWeight:"200"}}>
                                © Daraz 2025
                            </Typography>
                        </div>
                    </Stack>
                </div>
            </Box>
        </>
    )
}

export default FourthFooter