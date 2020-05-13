import React from "react";

const VideoListItem = ({ movie }) => {
  // ({movie}) similar to let movie = props.movie
  return <li>Recommended Movie : {movie}</li>;
};

export default VideoListItem;
