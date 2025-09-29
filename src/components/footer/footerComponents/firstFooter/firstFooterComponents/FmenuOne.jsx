import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
function FmenuOne() {
  return (
   <>
   <Stack className="firstfootermenusrow">
          <Typography variant="h3">Customer Care</Typography>
          <nav>
            <ul>
              <li>
                <Link component={RouterLink} to="/">Help Center</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">How to Buy</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Corporate & Bulk Purchasing</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Returns & Refunds</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Daraz Shop</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Contact Us</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Purchase Protection</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Daraz Pick up Points</Link>
              </li>
            </ul>
          </nav>
        </Stack>
   </>
  )
}

export default FmenuOne