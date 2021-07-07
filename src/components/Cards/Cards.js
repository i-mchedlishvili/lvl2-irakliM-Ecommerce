import React from "react";
import "../../App.css";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from "../../images/12.jpg"

function Cards() {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      const classes = useStyles();
  return (
      <Grid container>
          <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blue denim shirt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $17.99
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blue denim shirt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $17.99
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blue denim shirt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $17.99
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blue denim shirt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $17.99
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
   </Grid>
  );
}



export default Cards;