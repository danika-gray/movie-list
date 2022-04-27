import React from 'react';
import MovieList from './MovieList.js';

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
      ]
    }
  }

  render() {
    return (
    <div id = 'Movie List'>
      <ul>
        <li>{movies[0].title}</li>
        <li>{movies[1].title}</li>
        <li>{movies[2].title}</li>
        <li>{movies[3].title}</li>
        <li>{movies[4].title}</li>
      </ul>
    </div>
    );
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

