import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './Search.jsx';
import InputMovie from './Input.jsx';
import axios from 'axios';

class App extends React.Component {

  // put hardcoded movies back and insert them into the table
  // before working on sending get and post requests for dynamic data

  // once component mounts, send get request to SQL server to get the data
  // can maybe ? test by commenting out movies and trying to get it from server?
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
    // if someone searches a title we need to send a
    // get request? to get titles that match the search
    // from the database

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
    // when someone inputs a new title we need to send a post request
    let newMovie = {};
    newMovie.title = text;

    let newMovieList = this.state.movies.slice();
    newMovieList.push(newMovie);

    this.setState({
      movies: newMovieList
    })

    // send data for the newly added movie only
    axios.post(`http://localhost:4000/movies`, newMovie)
      .then(res => {
        console.log(res.data, 'res.data');
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

