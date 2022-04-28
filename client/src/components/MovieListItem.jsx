import React from 'react';

const MovieListItem = ({movie}) => {
  return (
    <p>{movie.title} <span> <button>watched</button> </span></p>
  )
}

export default MovieListItem;