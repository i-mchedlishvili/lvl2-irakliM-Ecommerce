import { makeStyles } from "@material-ui/core";

export const priceRangeStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
  float: {
    float: "right",
  },
}));

export const cardStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

export const itemStyles = makeStyles({
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


export const productStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  