import React, { useState } from "react";
import "../../App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function Cards() {
  const [data, setData] = useState([
    {
      image:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      name: "Blue denim shirt",
      price: "$17.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    },
    {
      image:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
      name: "Blue denim shirt",
      price: "$18.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    },
    {
      image:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
      name: "Blue denim shirt",
      price: "$19.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    },
    {
      image:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
      name: "Blue denim shirt",
      price: "$20.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    },
    {
      image:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      name: "Blue denim shirt",
      price: "$21.99",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.",
    },
  ]);

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
        {data.map((items) => (
          <Grid item lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={items.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {items.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
