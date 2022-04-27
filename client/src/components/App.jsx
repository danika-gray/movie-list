import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ],
      movieSearch: 'Mean Girls'
    }
  }

  handleSearchTitle(searchTitle) {
    this.setState({
      // movies: call some function to list movies by search term
      movieSearch: searchTitle
    })
  }

  render() {
    return (
      <div id="app">
        <div id="search">
          < Search handler={this.handleSearchTitle.bind(this)}/>
        </div>
        <div id="movieList">
          < MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
};

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

export default App;

