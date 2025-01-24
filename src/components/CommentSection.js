import React from "react";
import Comment from "./Comment";

function CommentSection({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      {comments.map((comment) => (
        <Comment key={comment.id} user={comment.user} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentSection;