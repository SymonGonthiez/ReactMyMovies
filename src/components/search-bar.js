import React, { Component } from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeHolder: "Enter a movie name" };
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange.bind(this)}
          placeholder={this.state.placeHolder}
        />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }
}

export default SearchBar;
