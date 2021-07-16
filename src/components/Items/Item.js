import React, { value, handleChange, useState, useEffect } from "react";
import "../../App.css";
import {
  Box,
  Container,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../Cards/Cards";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Item(props) {
  console.log(props.url);

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.url}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginRight: 40,
      marginBottom: 40,
    },
    media: {
      height: 240,
    },
    image: {
      maxWidth: 90,
    },
  });

  const classes = useStyles();

  return (
    <>
      <Box p={5}>
        <Container>
          <Box>
            <Typography variant="h4" align="center" component={Box} p={5}>
              Product page
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={5}>
            <Box>
              <img className={classes.root} src={data.image} />
              <Box display="flex">
                <img className={classes.image} src={data.image} />
                <img className={classes.image} src={data.image} />
                <img className={classes.image} src={data.image} />
                <img className={classes.image} src={data.image} />
              </Box>
            </Box>
            <Box>
              <Typography variant="h5">{data.title}</Typography>
              <Typography variant="subtitle2">{data.category}</Typography>
              <Box>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarBorderIcon color="primary" />
              </Box>
              <Typography>${data.price}</Typography>
              <Typography>{data.description}</Typography>
              <Box>
                <Box display="flex">
                  <Typography variant="h6">Model</Typography>
                  <Typography component={Box} pl={5}>
                    XXXX
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography variant="h6">Color</Typography>
                  <Typography component={Box} pl={5}>
                    XXXX
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography variant="h6">Delivery</Typography>
                  <Typography component={Box} pl={5}>
                    USA, EUROPE
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <Box>
                  <Typography variant="h6">Select size</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" component={Box} pl={5}>
                    Quantity
                  </Typography>
                </Box>
              </Box>
              <Box>
                <FormControl component="fieldset">
                  <RadioGroup>
                    <FormControlLabel
                      value="small"
                      control={<Radio />}
                      label="small"
                    />
                    <FormControlLabel
                      value="medium"
                      control={<Radio />}
                      label="medium"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio />}
                      label="large"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <Button variant="contained" color="primary">
                  BUY NOW
                </Button>
                <Button component={Box} ml={2}>
                  ADD TO CART
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Item;
