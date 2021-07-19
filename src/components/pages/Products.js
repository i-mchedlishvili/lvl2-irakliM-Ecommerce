import React, { useState } from "react";
import { Box } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import ModalTab from "../Modal";
import { productStyles } from "./productStyles";
import { BounceLoader } from "react-spinners";
import useProducts from "../../api/useProducts";
import { limiterStyles } from "../LimiterStyles";

function Products() {
  const classes = productStyles();
  const limiterStyle = limiterStyles();
  const [limit, setLimit] = useState("");
  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  const data = useProducts(limit);
  return (
    <>
      <ModalTab />
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
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Names</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map(({ category, title, price, id }) => (
                <TableRow key={category}>
                  <TableCell component="th" scope="row">
                    {title}
                  </TableCell>
                  <TableCell align="right">{category}</TableCell>
                  <TableCell align="right">${price}</TableCell>
                  <TableCell align="right">{id}</TableCell>
                </TableRow>
              ))
            ) : (
              <BounceLoader
                component={Box}
                display="flex"
                alignItems="center"
                size={72}
                color="red"
                loading
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Products;
