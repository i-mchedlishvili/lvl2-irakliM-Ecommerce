import { Box, Container, Slider, makeStyles } from "@material-ui/core";
import React from "react";
import "../../App.css";
import { priceRangeStyles } from "../../styles";

function PriceSlider() {
  const classes = priceRangeStyles();
  return (
    <>
      <Container>
        <Box fontWeight="fontWeightBold" fontSize={17}>
          Price
        </Box>
        <Box mb={3}>
          <div className={classes.margin} />
          <Slider
            track="inverted"
            aria-labelledby="track-inverted-range-slider"
            min={0}
            max={100}
            step={10}
            defaultValue={[50]}
          />
          <span>$0</span>
          <span className={classes.float}>$100</span>
        </Box>
      </Container>
    </>
  );
}

export default PriceSlider;
