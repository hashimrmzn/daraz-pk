import React from 'react'
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import Logo from './Logo';
import SearchField from '../../searchfield/SearchField';
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function BottomHeader() {
    return (
        <>
            <Toolbar sx={{
                padding: "10px 0 !important"
            }}>
                <Stack sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Logo />


                    <SearchField
                        outlined={false}
                        showLabel={false}
                        placeholder="Search in Daraz"
                        width="60%"
                        padding="0px 0px 0px 19px"
                        iconColor="#f85606"
                    />


                    <IconButton onClick={console.log('Cart icon clicked!')} sx={{ color: "#fff",background:"transparent !important",ml:"20px" }
            
                }>
                        <ShoppingCartOutlinedIcon  sx={{width:30,height:30}}/>
                    </IconButton>
                </Stack>



            </Toolbar>
        </>
    )
}

export default BottomHeader