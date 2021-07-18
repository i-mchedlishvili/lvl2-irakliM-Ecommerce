import React, { useState, useEffect } from "react";
import "../../App.css";
import { cardStyles } from "./CardStyles";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Limi() {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState("");

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [limit]);

  const classes = cardStyles();
  const selectStyle = useStyles();

  return (
    <FormControl className={selectStyle.formControl}>
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
