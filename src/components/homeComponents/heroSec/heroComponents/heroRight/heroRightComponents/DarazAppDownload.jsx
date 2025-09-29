import { Stack } from '@mui/material'
import qr from "../../../../../../assets/images/qr.avif"
import appstore from "../../../../../../assets/images/app-store.png";
import googlestore from "../../../../../../assets/images/google-store.png";
import React from 'react'

function DarazAppDownload() {
    return (
        <>
            <Stack
            mt={"10px"}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems={"center"}
            >
                <div style={{width:"48%"}}>
                    <img src={qr}  style={{width:"100%"}} alt='qr code'/>
                </div>
                <Stack width={"48%"}>
                    <a href='https://apps.apple.com/pk/app/daraz-online-shopping-app/id978058048' target='_blank'>
                         <img src={appstore}  style={{width:"100%"}} alt='app-store'/>
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.daraz.android&pli=1' target='_blank'>
                        <img src={googlestore} style={{width:"100%"}}  alt='google-store'/>
                    </a>
                </Stack>
            </Stack>
        </>
    )
}

export default DarazAppDownload