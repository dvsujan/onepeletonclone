import React from "react";
import "./blogcard.css";

const BlogCard = (props) => {
  return (
    <div className="blog-card">
      <img src={props.image} alt="lool" />
      <div className="blog-content">
        <h1>{props.title}</h1>
        <hr/>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
