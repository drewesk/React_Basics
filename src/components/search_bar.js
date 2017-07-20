import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super();

    this.state = {
      term: 'Initial Value'
    }
  }

  render() {
    return (
        <div className="search-bar">
          <input
            value={ this.state.keyword }
            onChange={ (event) => {
            this.setState({ term: event.target.value })} }
          />
        </div>
    );
  }
}
