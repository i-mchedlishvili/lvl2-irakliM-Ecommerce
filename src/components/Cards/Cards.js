import React, { useState, useEffect, setIsLoading } from "react";
import "../../App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemLayout from "../Items/ItemLayout";

function Cards() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 240,
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {!!data &&
          data.map((items) => (
            
            <Grid item lg={4}>
              <Link 
              to={<ItemLayout />}
              onClick={() => {console.log("asd")}}
              >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={items.image} />
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
            
          ))}
      </Grid>
    </div>
  );
}

export default Cards;
