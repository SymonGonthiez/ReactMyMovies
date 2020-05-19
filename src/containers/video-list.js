import React from "react";
import VideoListItem from "../components/video-list-item";

const VideoList = ({ movieList }) => {
  return (
    <div>
      <ul>
        {movieList.map((movie) => {
          return <VideoListItem key={movie.id} movie={movie} />; // Movie objet renvoyé par moviedb
        })}
      </ul>
    </div>
  );
};

export default VideoList;
