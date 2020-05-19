import React, { Component } from "react";
import SearchBar from "../components/search-bar";
import VideoList from "./video-list";
import VideoDetail from "../components/video-detail";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=76a51bc291fdc20d6ca86a1e0a141152";
const DEFAULT_TYPE_SEARCH = "discover";
const DEFAULT_PARAM = "language=fr&include_adult=false";

const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: {}, currentMovie: {} };
  }

  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
      function (response) {
        this.setState(
          {
            movieList: response.data.results.slice(1, 6),
            currentMovie: response.data.results[0],
          },
          function () {
            this.applyVideoToCurrentMovie();
          }
        );
      }.bind(this)
    );
  }

  applyVideoToCurrentMovie() {
    axios
      .get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}{POPULAR_MOVIES_URL}?${API_KEY}&append_to_response=videos&include_adult=false&{API_KEY}`
      )
      .then(
        function (response) {
          if (typeof response.data.videos === true) {
            console.log(response.data);
            const youtubeKey = response.data.videos.results[0].key;

            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({ currentMovie: newCurrentMovieState });
          } else {
            console.log("No video");
          }
        }.bind(this)
      );
  }

  componentWillMount() {
    this.initMovies();
  }
  render() {
    const renderVideoList = () => {
      if (this.state.movieList.length >= 5) {
        return <VideoList movieList={this.state.movieList} />;
      }
    };
    return (
      <div>
        <SearchBar />
        {renderVideoList()}
        <VideoDetail
          title={this.state.currentMovie.title}
          description={this.state.currentMovie.overview}
        />
      </div>
    );
  }
}

export default App;
