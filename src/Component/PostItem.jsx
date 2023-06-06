import React from "react";
import "../Style/PostItem.css";
import axios from "axios";
function PostItem(props) {
  const { title, category, image, content } = props;

  return (
    <div
      style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.5)" }}
      className="post-item"
    >
      <div className="post-item__image-wrapper">
        <img
          className="post-item__image"
          src={image}
          alt={title}
          width="250"
          height="160"
        />
      </div>
      <div className="post-item__content-wrapper">
        <h3 className="post-item__title">{title}</h3>
        <h4 className="post-item__subtitle">{category}</h4>
        <p className="post-item__content">{content}</p>
      </div>
    </div>
  );
}

export default PostItem;
