import React, { useState, useEffect } from "react";
import { limiterStyles } from "./LimiterStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useCards from "../api/useCards";

function Limi() {
  const [limit, setLimit] = useState("");

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  const limiterStyle = limiterStyles();

  return (
    <FormControl className={limiterStyle.formControl}>
      <InputLabel id="limit">Limit</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="limit"
        value={limit}
        onChange={handleChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Limi;
