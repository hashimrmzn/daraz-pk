import React, { useContext } from "react";
import { Box, Stack } from "@mui/material";
import FirstCol from './FirstCol';
import SecCol from './SecCol';
import { MobileScreenConext } from "../../../../../context/MobileScreenContext";

function ThirdLeftFooter() {
  const isMobile = useContext(MobileScreenConext);
  return (
    <>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width={isMobile ? "100%" : "50%"}
      >
        <Stack width={isMobile ? "100%" : "50%"}>
          <FirstCol />
        </Stack>

        <Stack width={isMobile ? "100%" : "50%"}>
          <SecCol />
        </Stack>
      </Box>
    </>
  )
}

export default ThirdLeftFooter