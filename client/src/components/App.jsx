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
    this.organizeMovieList = this.organizeMovieList.bind(this)
  }

  organizeMovieList(text) {
    this.setState({
      movieSearch: text // working
    })
    let organizedList = this.state.movies.slice();

    organizedList = organizedList.filter(function(movie) {
      let movieTitle = movie.title.toLowerCase();
      text = text.toLowerCase();
      if (movieTitle.indexOf(text) > -1) {
        return true;
      }
      return false;
    });
    this.setState({
      movies: organizedList
    })
  }

  render() {
    return (
      <div id="app">
        <div id="search">
          < Search organizeMovieList={this.organizeMovieList}/>
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

