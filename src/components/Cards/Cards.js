import React, { useState, useEffect } from "react";
import "../../App.css";
import {
  Grid,
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { cardStyles } from "./CardStyles";
import { BounceLoader } from "react-spinners";
import useCards from "../../api/useProducts";
import Pagination from "@material-ui/lab/Pagination";

function Cards() {
  const data = useCards();
  const classes = cardStyles();

  return (
    <div>
      <Grid container spacing={3}>
        {data ? (
          data.map((items) => {
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
      <Box display="flex" justifyContent="center" mt={5} mr={5}>
        <Pagination count={10} color="primary" />
      </Box>
    </div>
  );
}

export default Cards;

// import React, { Component } from "react";
// import ReactPaginate from "react-paginate";
// import "../../style.css";

// export default class Cards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       offset: 0,
//       data: [],
//       perPage: 10,
//       currentPage: 0,
//     };
//     this.handlePageClick = this.handlePageClick.bind(this);
//   }
//   receivedData() {
//     fetch(`https://fakestoreapi.com/products/`).then((res) => {
//       const data = res.data;
//       const slice = data.slice(
//         this.state.offset,
//         this.state.offset + this.state.perPage
//       );
//       const postData = slice.map((pd) => (
//         <React.Fragment>
//           <p>{pd.title}</p>
//           <img src={pd.thumbnailUrl} alt="" />
//         </React.Fragment>
//       ));

//       this.setState({
//         pageCount: Math.ceil(data.length / this.state.perPage),

//         postData,
//       });
//     });
//   }
//   handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState(
//       {
//         currentPage: selectedPage,
//         offset: offset,
//       },
//       () => {
//         this.receivedData();
//       }
//     );
//   };

//   componentDidMount() {
//     this.receivedData();
//   }
//   render() {
//     return (
//       <div>
//         {this.state.postData}
//         <ReactPaginate
//           previousLabel={"prev"}
//           nextLabel={"next"}
//           breakLabel={"..."}
//           breakClassName={"break-me"}
//           pageCount={this.state.pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={this.handlePageClick}
//           containerClassName={"pagination"}
//           subContainerClassName={"pages pagination"}
//           activeClassName={"active"}
//         />
//       </div>
//     );
//   }
// }
