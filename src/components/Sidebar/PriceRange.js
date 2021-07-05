import { Box, Container, makeStyles, TextField } from "@material-ui/core";
import StyledRadio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import "../../App.css";

function Price() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
        width: "10ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box fontWeight="fontWeightBold" fontSize={17} mb={1}>
          Price
        </Box>
        <Box mb={3}>
          <RadioGroup aria-label="range" name="range">
            <FormControlLabel
              value="25"
              control={<StyledRadio />}
              label="UNDER $25"
            />
            <FormControlLabel
              value="50"
              control={<StyledRadio />}
              label="$25 TO $50"
            />
            <FormControlLabel
              value="100"
              control={<StyledRadio />}
              label="$50 TO $100"
            />
            <FormControlLabel
              value="200"
              control={<StyledRadio />}
              label="$100 TO $200"
            />
            <FormControlLabel
              value="above"
              control={<StyledRadio />}
              label="$200 & ABOVE"
            />
          </RadioGroup>
        </Box>
        <Box mb={2}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="$ Min" variant="outlined" /> _
            <TextField id="outlined-basic" label="$ Max" variant="outlined" />
          </form>
        </Box>
      </Container>
    </>
  );
}

export default Price;
