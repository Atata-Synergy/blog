import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import BlogSinglePost from "./BlogSinglePost";
import { useParams } from "react-router-dom";
import HeaderPreview from "./previewHeader";
import Link from "@material-ui/core/Link";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Grid from "@material-ui/core/Grid";
import Comment from "./BlogCard/comment";
import Footer from "./footer";
import Related from "./topPostCard/topPostCard";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Blog() {
  const classes = useStyles();
  const postId = useParams();
  return (
    <React.Fragment>
      <CssBaseline />

      <HeaderPreview />
      <Container maxWidth="lg">
        <ContentView>
          <Grid container>
            <Grid md={9} xs={12}>
              <BlogSinglePost postId={postId} />
              {/* <div className="comment">
                <Comment />
              </div> */}
            </Grid>
            <Grid md={3} xs={12}>
              <div className="RelatedPost">
                <p>Related Posts</p>
                <Related />
                <Related />
                <Related />
                <Related />
                <Related />
              </div>
            </Grid>
          </Grid>
        </ContentView>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const ContentView = styled.div`
  padding: 15px;
  .category {
    color: var(--colorDark);
    margin-bottom: 15px;
  }
  .comment {
    width: 80%;
    margin: auto;
  }
  .RelatedPost {
    margin-top: 100px;
  }
  .imageContainer {
    width: 700px;
    margin: auto;
    height: 450px;
    overflow: hidden;
    img {
      width: 700px;
      height: 450px;
    }
  }
  .Content {
    margin-top: 20px;
    font-family: "Zilla Slab", serif;
    .p-content {
      margin: 20px 0;
      justify-text: center;
      font-size: 25px;
    }
    .p-header {
      margin: 15px 0;
      font-family: "Playfair Display", serif;
    }
  }

  .cat-social {
    display: flex;
    .social {
      margin-left: 10px;
      font-size: 10px;
      color: var(--colorDark);
      .MuiSvgIcon-root {
        font-size: 20px;
        margin: 0 10px !important;
      }
    }
  }
  .tag {
    width: 70%;
    margin: auto;
    margin-bottom: 15px;
  }
  .related {
    width: 70%;
    margin: auto;
    padding: 10px 0;
    border-bottom: solid 0.5px var(--colorDark);
    .c-title {
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      width: 80%;
      margin: auto;
    }
  }
  .social-links {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 1080px) {
    .imageContainer {
      width: 100%;
      margin: auto;
      height: 250px;
      overflow: hidden;
      background: var(--colorYellow);
      img {
        width: 100%;
        height: 250px;
      }
    }
    .p-content {
      text-align: center;
    }
  }
`;
