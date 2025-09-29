import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

function TopHeader() {
  return (
    <Stack
      className="top-header"
      position="static"
      sx={{ backgroundColor: "transparent", color: "#fff", boxShadow: "none",minHeight:"unset !important"}}
    >
      <Toolbar sx={{ minHeight: "unset !important", padding: "0 !important" }}>
        <Stack direction="row" spacing={3} justifyContent="flex-end" width="100%">
          <Link component={RouterLink} to="/" >
            Save More on App
          </Link>

          <Link component={RouterLink} to="/" >
            Sell on Daraz
          </Link>

          <Link component={RouterLink} to="/" >
            Help & Support
          </Link>

          <Link component={RouterLink} to="/" >
            Login
          </Link>
          <Link component={RouterLink} to="/" >
            Sign Up
          </Link>
          <Link component={RouterLink} to="/" >
            زبان تبدیل کریں
          </Link>
        </Stack>
      </Toolbar>
    </Stack>
  );
}

export default TopHeader;
