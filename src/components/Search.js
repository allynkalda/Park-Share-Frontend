import React, { Component } from 'react';

class Search extends Component {

  handleSearch = event => {
    const {handleSearch} = this.props;
    handleSearch(event.target.value);
  }

  render() { 
    return (
      <div className="search-input">
        <input className="input" type="text" placeholder="Filter" onChange={this.handleSearch}/>
      </div>
    )
  }
}

export default Search;