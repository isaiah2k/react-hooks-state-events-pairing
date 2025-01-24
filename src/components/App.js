import React, { useState } from "react";
import videoData from "../data/video.js";
import VideoDetails from "./VideoDetails";
import CommentSection from "./CommentSection";

function App() {
  const [video, setVideo] = useState(videoData);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setVideo({ ...video, upvotes: video.upvotes + 1 });
  };

  const handleDownvote = () => {
    setVideo({ ...video, downvotes: video.downvotes + 1 });
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <VideoDetails
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentSection comments={video.comments} />}
    </div>
  );
}

export default App;