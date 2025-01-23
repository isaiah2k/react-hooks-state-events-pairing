import React from "react";

function Comment({ user, comment }) {
  return (
    <div>
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  )
}

export default Comment;