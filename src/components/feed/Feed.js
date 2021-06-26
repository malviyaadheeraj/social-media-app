import React from "react";
import "./Feed.css";
import { Posts } from "../../dummyData";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
