import React from "react";
import VideoListItem from "../components/video-list-item";

const VideoList = (props) => {
  const { movieList } = props; // = props.movieList
  return (
    <div>
      <ul>
        {movieList.map((movie) => {
          return (
            <VideoListItem
              key={movie.id}
              movie={movie}
              callback={receiveCallBack}
            />
          ); // Movie objet renvoyé par moviedb
        })}
      </ul>
    </div>
  );

  function receiveCallBack(movie) {
    props.callback(movie);
  }
};

export default VideoList;
