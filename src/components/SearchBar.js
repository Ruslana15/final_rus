import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
