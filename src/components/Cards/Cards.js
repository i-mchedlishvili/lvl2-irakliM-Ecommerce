import React, { useState, useEffect } from "react";
import "../../App.css";
import { Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { cardStyles } from "./CardStyles";
import { BounceLoader } from "react-spinners";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Cards() {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState("");

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [limit]);

  const classes = cardStyles();
  const selectStyle = useStyles();

  return (
    <div>
      <FormControl className={selectStyle.formControl}>
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
