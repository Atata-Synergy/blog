import React, { Component } from "react";
import { BaseUrl } from "../Patials/BaseUrl";
import axios from "axios";
import BlogCard from "./BlogCardFunction";
import { CircularProgress } from "@material-ui/core";
class BlogCardClass extends Component {
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <CircularProgress />
        ) : (
          this.props.error && (
            <p className="alert alert-danger">{this.props.error}</p>
          )
        )}
        {this.props.blogs && this.props.blogs.length > 0 ? (
          this.props.blogs.map((blog, key) => (
            <BlogCard
              key={key}
              categories="Uncategorized"
              content={blog.content}
              thumbnail_url={blog.thumbnail_url || "thumbnail url"}
              date={blog.created_at}
              postBy="Admin"
             { ...blog}
            />
          ))
        ) : this.props.error ? (
          this.props.error.message ? (
            <p>this.props.error.message</p>
          ) : (
            <p>{JSON.stringify(this.props.error)}</p>
          )
        ) : (
          <> Blog post is empty</>
        )}
      </>
    );
  }
}

export default BlogCardClass;
