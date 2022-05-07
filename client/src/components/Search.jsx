import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: '',
      submission: false
    }
    this.handleSearchTitle = this.handleSearchTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTitle: event.target.value
    });
  }

  handleSearchTitle(event) {
    event.preventDefault();
    this.props.organizeMovieList(this.state.searchTitle);
    this.setState({
      searchTitle: '',
      submission: true,
    })
  }
  /* <form onSubmit={this.props.organizeMovieList} > */

  render() {
    return (
      <form onSubmit={this.handleSearchTitle} >
        <label>
          <input type="text" placeholder="search..." value={this.state.searchTitle} onChange={this.handleChange} />
        </label>
         <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default Search;