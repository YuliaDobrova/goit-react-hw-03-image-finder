import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
    page: 1,
  };

  onHandleInputChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onHandleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.onHandleInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
