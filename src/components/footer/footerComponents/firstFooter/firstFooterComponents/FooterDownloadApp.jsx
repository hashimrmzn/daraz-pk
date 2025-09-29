import React from 'react'
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Footerlogo from '../../../../../../src/assets/images/footer-logo.png'
import FappStore from '../../../../../../src/assets/images/f-app-store.png'
import FappGallery from '../../../../../../src/assets/images/f-app-gallery.png'
import FGooglePlay from '../../../../../../src/assets/images/f-google-play.png'
function FooterDownloadApp() {
    return (
        <>
            <Stack direction="row" alignItems={"start"} justifyContent={"space-between"} gap={"30px"}>
                <Stack direction="row" alignItems={"start"}>
                    <div>
                        <img src={Footerlogo} style={{ height: "40px", width: "40px" }} />
                    </div>
                    <Stack ml={2}>
                        <Typography sx={{ fontSize: "16px", fontWeight: "300", color: "#f36f36" }}>
                            Happy Shopping
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: "300", color: "#0f136d" }}>
                            Download App
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{width:"300px"}}>
                    <Grid
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={6} sx={{ maxWidth: 130 }}>
                            <a
                                href="https://itunes.apple.com/app/id978058048"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={FappStore}
                                    alt="App Store"
                                    style={{ width: "100%", maxWidth: 130 }}
                                />
                            </a>
                        </Grid>

                        <Grid item xs={6} sx={{ maxWidth: 130 }}>
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={FGooglePlay}
                                    alt="Google Play"
                                    style={{ width: "100%", maxWidth: 130 }}
                                />
                            </a>
                        </Grid>

                        <Grid item xs={6} sx={{ maxWidth: 130 }}>
                            <a
                                href="https://appgallery.huawei.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={FappGallery}
                                    alt="App Gallery"
                                    style={{ width: "100%", maxWidth: 130 }}
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Stack>



            </Stack>
        </>
    )
}

export default FooterDownloadApp