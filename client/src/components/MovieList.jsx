import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({movies, hasBeenWatched}) => {
  const movieListItems = movies.map((movie) =>
  <MovieListItem movie={movie} hasBeenWatched={hasBeenWatched}/> );

  return (
    <div id="movie list">
      {movieListItems}
    </div>
  );
}

export default MovieList;