import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
function FmenuSec() {
  return (
    <>
      <Stack className="firstfootermenusrow">
          <Typography variant="h3">Daraz</Typography>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link component={RouterLink} to="/">About Us</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Digital Payments</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Daraz Donates</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Daraz Blog</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">NTN Number : 4012118-6</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">STRN Number : 1700401211818</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Daraz Pick up Points</Link>
              </li>
              <li>
                <Link component={RouterLink} to="/">Online Shopping App</Link>
              </li>

              <li>
                <Link component={RouterLink} to="/">Online Grocery Shopping</Link>
              </li>
            </ul>
          </nav>
        </Stack>
    
    </>
  )
}

export default FmenuSec