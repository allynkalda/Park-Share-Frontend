import React, { Component } from 'react';

class Search extends Component {

  handleSearch = event => {
    const {handleSearch} = this.props;
    handleSearch(event.target.value);
  }

  render() { 
    return (
      <div className="front-container">
        <input className="input" type="text" placeholder="Filter by location" onChange={this.handleSearch}/>
      </div>
    )
  }
}

export default Search;