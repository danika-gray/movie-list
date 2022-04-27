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

  handleSearch(event) {
    this.setState({
      movieSearch: event.target.value
    })
  }

  render() {
    return (
      <div id="app">
        <div id="search">
          < Search handler={this.handleSearch.bind(this)}/>
        </div>
        <div id="movieList">
          < MovieList movies={this.state.movies}/>
        </div>
      </div>
    )
  }
};

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;

