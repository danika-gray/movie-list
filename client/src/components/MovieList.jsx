import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movies}) => {
  const movieListItems = movies.map((movie) =>
  <MovieListItem movie={movie} /> );

  return (
    <div id="movie list">
      {movieListItems}
    </div>
  );
}

export default MovieList;