import React, { value, handleChange } from "react";
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
import Cards from "../Cards/Cards";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Item() {
  return (
    <>
      <Box>
        <Container>
          <Box>
            <Typography variant="h4" align="center" component={Box} p={5}>
              Product page
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" p={5}>
            <Box>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" />
            </Box>
            <Box>
              <Typography variant="h5">Blue denim shirt</Typography>
              <Typography variant="subtitle2">SHIRTS</Typography>
              <Box>
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarIcon color="primary" />
                <StarBorderIcon color="primary" />
              </Box>
              <Typography>$17.99</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, sapiente
                <br /> illo. Sit error voluptas repellat rerum quidem, soluta
                enim perferendis <br /> voluptates laboriosam. Distinctio,
                officia quis dolore quos sapiente tempore <br /> alias.
              </Typography>
              <Box>
                <Box display="flex">
                  <Typography variant="h6">Model</Typography>
                  <Typography component={Box} pl={5}>
                    Shirt 5407X
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography variant="h6">Color</Typography>
                  <Typography component={Box} pl={5}>
                    Blue
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
