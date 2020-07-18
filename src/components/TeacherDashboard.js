import React, { Component } from "react";
import Header from "./Header";
import RecipeReviewCard from "./ContentCards";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Chart } from "react-google-charts";
import Typography from "@material-ui/core/Typography";
import "../styled/studentDashboard.css";
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

class TeacherDashboard extends Component {
  handleCardClick = () => {
    this.props.history.push("/videoPlay");
  };
  render() {
    const data = [
      ["Year", "Visitors", { role: "style" }],
      ["Js", 10, "color: gray"],
      ["Python", 14, "color: #76A7FA"],
      ["c#", 16, "color: blue"],
      [
        "c++",
        22,
        "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF",
      ],
      [
        "Java",
        28,
        "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2",
      ],
    ];
    return (
      <div>
        <Header history={this.props.history} />
        <Container style={{ paddingTop: "100px" }}>
          {" "}
          <Typography variant="h3" gutterBottom className="mainHeading">
            Courses Upload
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div onClick={() => this.handleCardClick()}>
                <RecipeReviewCard />
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Typography variant="h4" gutterBottom className="videoHeading">
                Course Views
              </Typography>
              <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Typography
                variant="h4"
                gutterBottom
                className="videoHeading"
              ></Typography>
              <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Typography
                variant="h4"
                gutterBottom
                className="videoHeading"
              ></Typography>
              <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Typography
                variant="h4"
                gutterBottom
                className="videoHeading"
              ></Typography>
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={data}
              />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default TeacherDashboard;
