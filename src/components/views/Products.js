import React, { useState, useEffect, setIsLoading } from "react";
import { Grid, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import FooterTop from "../Layout/FooterTop";
import Footer from "../Layout/Footer";
import CopyrightFooter from "../Layout/FooterCopyright";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core";
import ModalTab from "../Modal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  const classes = useStyles();
  return (
    <>
      <ModalTab />
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
            {!!data &&
              data.map((row) => (
                <TableRow key={row.category}>
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Products;
