import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./header";
import MainFeaturedPost from "./MainFeaturedPost";
import BlogCard from "./BlogCard";
import Footer from "./footer";
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BaseUrl } from "./Patials/BaseUrl";
import Axios from "axios";
import { CircularProgress, Backdrop } from "@material-ui/core";
import TopPost from "./topPostCard/topPostCard";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const sections = [
  { title: "Agriculture", url: "#" },
  { title: "Technology", url: "#" },
  { title: "Art", url: "#" },
  { title: "Tourism", url: "#" },
  { title: "Politics", url: "#" },
];

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      error: null,
      isFetching: false,
    };
  }
  async componentDidMount() {
    this.setState({ isFetching: true });
    await Axios.get(`${BaseUrl}/blog/all`)
      .then((response) => {
        console.log(response);

        this.setState({ blogs: response.data.data, isFetching: false });
      })
      .catch((error) => {
        console.log(error.response);
        this.setState({
          error: error.response ? error.response : JSON.stringify(error),
        });
      });
  }

  render() {
    return (
      <>
        <BlogFunction
          mainFeaturedPost={this.state.blogs[0] || {}}
          featuredPosts={this.state.blogs[1] || {}}
          blogs={this.state.blogs}
          error={this.state.error}
          isFetching={this.state.isFetching}
        />
      </>
    );
  }
}
function BlogFunction(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Backdrop
        className={classes.backdrop}
        open={props.isFetching}
        // onClick={handleClose}
      >
        <CircularProgress color= "#ff0000" />
      </Backdrop>
      <Router>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header sections={sections} />
          <main>
            <MainFeaturedPost post={props.mainFeaturedPost} />
            <Grid container spacing={4}>
              {console.log(props)}
            </Grid>
            <Grid container justify="flex-start">
              <Grid item md={8} xs={12}>
                <BlogCard blogs={props.blogs} />
              </Grid>
              <Grid md={4} xs={12}>
                <div className="r-post">
                  <p style={ {textAlign: "center", paddingTop:10, fontSize:25,}}>Top Post</p>
                 <Divider />
                 <TopPost />
                 <TopPost />
                 <TopPost />
                 <TopPost />
                 <TopPost />
                </div>
              </Grid>
            </Grid>
          </main>
        </Container>
      </Router>{" "}
      <Footer />
    </React.Fragment>
  );
}

export default Blog;
