import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import InputMovie from './Input.jsx';
import axios from 'axios';

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
    this.hasBeenWatched = this.hasBeenWatched.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/movies')
      .then(res => {
        let newData = res.data.map((movieObj) => {
          return { title: movieObj.movieName }
        })
        this.setState({
          movies: newData
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  organizeMovieList(searchedTitle) {
    this.setState({
      movieSearch: searchedTitle
    })
    let organizedList = this.state.movies.slice();

    organizedList = organizedList.filter(function(movie) {
      let movieTitle = movie.title.toLowerCase();
      searchedTitle = searchedTitle.toLowerCase();
      if (movieTitle.indexOf(searchedTitle) > -1) {
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

    axios.post(`http://localhost:4000/movies`, newMovie)
      .then(res => {
        console.log(res.data, 'res.data');
      })
  }

  hasBeenWatched(boolean) {
    console.log('hasBeenWatched boolean in App.jsx:', boolean);
    // if true add element to watched array
      // send post request
    // if false add element to not watched array
      // send post request
    // if element is found in watched and boolean has been updated
      // splice element out
      // send delete request?
    // if element is found in not watched and boolean has been updated
      // splice element out
      // send delete request
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
          < MovieList movies={this.state.movies} hasBeenWatched={this.hasBeenWatched}/>
        </div>
      </div>
    )
  }
};

export default App;

