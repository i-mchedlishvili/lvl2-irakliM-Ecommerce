import { makeStyles } from "@material-ui/core";

export const FormStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    display: "block",
    margin: "0 auto",
    paddingTop: 100,
  },
  flexHeader: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    right: "2%",
  },
  input: {
    width: 500,
    height: 38,
    marginBottom: 30,
    paddingLeft: 7,
    outline: "none",
    borderRadius: 4,
  },
  checkbox: {
    marginBottom: 18,
    color: "gray",
  },
  button: {
    display: "block",
    margin: "0 auto",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
