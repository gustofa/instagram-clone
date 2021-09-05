import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ userName, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt=""
          src="https://i.pravatar.cc/100"
        />
        <h3>{userName}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="Japanese street" />
      <h4 className="post__text">
        <strong>{userName}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
