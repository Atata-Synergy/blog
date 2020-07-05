import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { BaseUrl } from "../Patials/BaseUrl";
import BlogPreview from "../BlogPreview";
import propTypes from "prop-types";
import parse from "html-react-parser";
import ReadMoreReact from "read-more-react";
import Link from "@material-ui/core/Link";

function BlogCardFunction(props) {
  let history = useHistory();
  const onClick = (id) => {
    history.push({
      pathname: "/blog/" + id,
      state: {
        ...props,
      },
    });
  };
  let date = new Date(props.date);
  let id = props.id;
  return (
    <>
      {console.log(props)}

      <Card>
        <div className="imageContainer">
          <img src={props.banner} style={{ width: "100%" }} />
        </div>
        <div className="component">
          <span className="category">{props.categories}</span>

          <p className="title">{props.title}</p>

          <span className="content">
            {parse(props.content.substring(3, 160))}
          </span>
          <span>
            <Link href={"/blogpreview/" + props.id} >...Read More</Link>
          </span>
          <div className="pr-d">
            <span className="postBy">Post by: {props.postBy}</span>
            {/* <span className="date">{JSON.stringify(date)}</span> */}
          </div>
        </div>
        <div></div>
      </Card>
    </>
  );
}

const Card = styled.div`
  margin-bottom: 10px;
  width: 780px;
  display: flex;
  height: 200px;
  padding: 25px;
  border-bottom: solid 0.5px var(--colorAsh);
  .imageContainer {
    width: 270px;
    height: 160px;
    border: solid 0.4px var(--colorAsh);
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 200px;
      height: 160px;
    }
  }
  .component {
    padding-left: 5px;
    .category {
      color: var(--colorDark);
      margin-bottom: 15px;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .content {
      height: 15px; 
      padding: 15px 0;  
      color: var(--colorDark);   
    }
    .pr-d {
      margin-bottom: 30px;
      .postBy {
        margin-right: 50px;
        color: var(--colorDark);
      }
      .date {
        color: var(--colorDark);
      }
    }
  }

  .button {
    font-size: 10px;
  }
  @media (max-width: 1080px) {
    width: 100%;
    height: 80%;
    .imageContainer {
      width: 250px;
      height: 100px;
      border: solid 0.4px var(--colorAsh);
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 250px;
        height: 100px;
      }
    }
    .component {
      padding-left: 5px;
      .category {
        color: var(--colorDark);
        margin-bottom: 15px;
      }
      .title {
        font-size: 17px;
        font-weight: bold;
      }
      .content {
      display: none;   
      }
      .pr-d {
        margin-bottom: 30px;
        .postBy {
          margin-right: 50px;
          color: var(--colorDark);
        }
        .date {
          color: var(--colorDark);
        }
      }
    }
`;

BlogCardFunction.propTypes = {
  categories: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  postBy: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  thumbnail_url: propTypes.string.isRequired,
};
export default BlogCardFunction;
