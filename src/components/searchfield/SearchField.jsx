import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function SearchField({
  label = "Search",
  placeholder = "Type here...",
  width = "300px",
  height = "45px",
  padding = "8px",

  backgroundColor = "#fff",
  showLabel = true,
  showSearchIcon = true,
  iconColor = "#f85606",
  onSearchClick,
  borderRadius = "4px",
  ...rest
}) {
  return (
    <TextField
      label={showLabel ? label : ""}
      placeholder={placeholder}
      variant="standard"
      sx={{
        width,

        m: padding,
        "& .MuiInputBase-root": {
          backgroundColor,
          p: padding,
          height,
          borderRadius,
        },

        "& .MuiInput-underline:before": { borderBottom: "none" },
        "& .MuiInput-underline:after": { borderBottom: "none" },
        "& .MuiInput-underline:hover:before": { borderBottom: "none !important" },
      }}
      InputProps={{
       
        disableUnderline: true,
        endAdornment: showSearchIcon ? (
          <InputAdornment position="end">
            <IconButton onClick={onSearchClick} sx={{
              backgroundColor: "#ffe1d2",
               height:"45px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#ffe1d2",
                borderRadius: 0,
              },
            }}>
              <SearchIcon sx={{ color: iconColor }} />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
}

export default SearchField;
