import React, { component, Component } from "react";
import Axios from "axios";
import { BaseUrl } from "./Patials/BaseUrl";
import parse from "html-react-parser";
import { Grid } from "@material-ui/core";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class BlogSinglePost extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    Axios.get(`${BaseUrl}/blog/single/${this.props.postId.id}`)
      .then((res) => this.setState({ post: res.data.data, isFetching: false }))
      .catch((err) =>
        this.setState({ error: err.response || err, isFetching: false })
      );
  }

  render() {
    return (
      <>
        <Backdrop open={this.state.isFetching} style={{ zIndex: 100 }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        {Object.keys(this.state.post).length > 0 ? (
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <div className="Content">
                <p className="category">Uncategorised</p>
                <h1 className="p-header">{this.state.post.title}</h1>
                <div className="cat-social">
                  <p className="category">
                    <BookmarkBorderIcon />
                    Post By: Admin
                  </p>
                  <p className="social">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                  </p>
                </div>
              </div>
              <div className="imageContainer">
                <img src={this.state.post.banner} />
              </div>
              <div className="Content">
                <div className="p-content">{parse(this.state.post.content)}</div>
              </div>
            </Grid>
          </Grid>
        ) : (
          <p>No post to show</p>
        )}
      </>
    );
  }
}

export default BlogSinglePost;
