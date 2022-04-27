import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import Search from './MovieListItem.jsx';

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
      <div id="movieList">
         < MovieList movies={this.state.movies}/>
         <Search />
      </div>
    )
  }
  // render() {
  //   return (
  //   <div id = 'Movie List'>
  //     <ul>
  //       <li>{movies[0].title}</li>
  //       <li>{movies[1].title}</li>
  //       <li>{movies[2].title}</li>
  //       <li>{movies[3].title}</li>
  //       <li>{movies[4].title}</li>
  //     </ul>
  //   </div>
  //   );
  // }
};

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;

