import React from 'react'
import { Box, Stack } from "@mui/material";
import FirstCol from './FirstCol';
import SecCol from './SecCol';
function ThirdLeftFooter() {
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} width={"50%"}>
        <Stack width={"50%"}>
          <FirstCol />
        </Stack>

        <Stack width={"50%"}>
          <SecCol />
        </Stack>
      </Box>
    </>
  )
}

export default ThirdLeftFooter