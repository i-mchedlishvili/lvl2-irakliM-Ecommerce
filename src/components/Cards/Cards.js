import React, { useState, useEffect, setIsLoading } from "react";
import "../../App.css";
import { Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { cardStyles } from "./CardStyles";
import { BounceLoader } from "react-spinners";

function Cards(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const classes = cardStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {data ? (
          data.map((items) => {
            console.log(items);
            return (
              <Grid item lg={4}>
                <Link to={"/item/" + items.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={items.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {items.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          ${items.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            );
          })
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
      </Grid>
    </div>
  );
}

export default Cards;
