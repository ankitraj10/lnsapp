import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../styled/playCard.css";
import Footer from "../components/Footer";

class PlayCard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container style={{ paddingTop: "100px" }}>
          <Typography variant="h3" gutterBottom className="mainHeading">
            JavaScript - Full Course for Beginners
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=uDwSnnhl1Ng&list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV"
                width={900}
                height={500}
              />
              <Typography variant="h4" gutterBottom className="videoHeading">
                Description
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className="videoDescription"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam. body2.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="sideBarBorder">
              {" "}
              <Typography
                variant="h5"
                gutterBottom
                style={{ textAlign: "left", marginBottom: "30px" }}
              >
                Course Uploaded
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=_uQrJ0TkZlc"
                    width={120}
                    height={100}
                    style={{ width: "50%", margin: 0, float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Python Course
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=VHbSopMyc4M&list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5"
                    width={120}
                    height={100}
                    style={{ width: "50%", margin: 0, float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Java Programming
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=RBSGKlAvoiM"
                    width={120}
                    height={100}
                    style={{ width: "50%", margin: 0, float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Data Structure Advance
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=Umm1ZQ5ltZw"
                    width={120}
                    height={100}
                    style={{ width: "50%", margin: 0, float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  c++ For Beginners
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=NvJfnG_W02M"
                    width={120}
                    height={100}
                    style={{ width: "50%", margin: 0, float: "left" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  style={{
                    textAlign: "left",
                  }}
                >
                  {" "}
                  C#
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default connect(null, {})(PlayCard);
