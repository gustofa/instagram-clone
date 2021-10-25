import React, { useEffect, useState } from "react";
import "./Post.css";
import { firebase, db } from "./firebase.js";
import Avatar from "@material-ui/core/Avatar";

function Post({ postId, userName, caption, imageUrl, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    console.log("postID: ", postId);
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              comm: doc.data(),
            }))
          );
        });
    }

    return () => {
      // eslint-disable-next-line
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post" key={postId}>
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt=""
          src="https://i.pravatar.cc/100"
        />
        <h3>{userName}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{userName}</strong> {caption}
      </h4>
      <div className="post__comments">
        {comments.map(({ id, comm }) => (
          <p key={id}>
            <strong>{comm.username}</strong> {comm.text}
          </p>
        ))}
      </div>
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
