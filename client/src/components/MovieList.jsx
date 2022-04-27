import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movies}) => {
  const movieListItems = movies.map((movie) =>
  <MovieListItem movie={movie} /> );

  return (
    <ul>
      {movieListItems}
    </ul>
  );
}

export default MovieList;