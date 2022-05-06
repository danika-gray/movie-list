import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import InputMovie from './Input.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        // {title: 'Mean Girls'},
        // {title: 'Hackers'},
        // {title: 'The Grey'},
        // {title: 'Sunshine'},
        // {title: 'Ex Machina'},
      ],
      movieSearch: '' //'Mean Girls'
    }
    this.organizeMovieList = this.organizeMovieList.bind(this);
    this.inputMovieList = this.inputMovieList.bind(this);
  }

  organizeMovieList(event) {
    event.preventDefault();
    this.setState({
      movieSearch: Search.state.searchTitle;
    })
    let organizedList = this.state.movies.slice();
    let text = Search.state.searchTitle;

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

  inputMovieList(text) {
    let newMovie = {};
    newMovie.title = text;

    let newMovieList = this.state.movies.slice();
    newMovieList.push(newMovie);

    this.setState({
      movies: newMovieList
    })
  }

  render() {
    return (
      <div id="app">
        <div id="search">
          < Search organizeMovieList={this.organizeMovieList}/>
        </div>
        <div id="input">
          < InputMovie inputMovieList={this.inputMovieList}/>
        </div>
        <div id="movieList">
          < MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
};

export default App;

