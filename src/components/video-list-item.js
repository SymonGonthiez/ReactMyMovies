import React from "react";

const IMGAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = ({ movie }) => {
  // ({movie}) similar to let movie = props.movie
  return (
    <li>
      <img
        height="100px"
        width="100px"
        src={`${IMGAGE_BASE_URL}${movie.poster_path}`}
      />
      <h3>Recommended Movie : {movie.title}</h3>
    </li>
  );
};

export default VideoListItem;
