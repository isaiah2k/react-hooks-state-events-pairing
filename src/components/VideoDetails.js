import React from "react";

function VideoDetails({ title, views, createdAt, upvotes, downvotes, onUpvote, onDownvote }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} views | Uploaded {createdAt}</p>
      <button onClick={onUpvote}>👍 {upvotes}</button>
      <button onClick={onDownvote}>👎 {downvotes}</button>
    </div>
  )
}

export default VideoDetails;