import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MobileTopHeader from './MobileTopHeader';
import MobileBottomHeader from './MobileBottomHeader';
export default function MobileHeader() {
  return (
    <Box >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
      >

        <Toolbar sx={{ backgroundColor: "#fff",width:"100%",pl:"0",pr:"0" }}>
          <MobileTopHeader />
        </Toolbar>
        <Toolbar sx={{width:"100%",pl:"0",pr:"0",m:"10px 0" }}>
          <MobileBottomHeader />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
