import React from 'react'
import { Typography, Stack } from '@mui/material';
import MbTop from "../../../../assets/images/mbtopheader.png"; 
function MobileTopHeader() {
    return (
        <>
            <div className='container'>
                <Stack>
                    <div>
                        <img src={MbTop} alt='logo' style={{width:"100%",objectFit:"contain"}}/>
                    </div>
                </Stack>
            </div>
        </>
    )
}

export default MobileTopHeader