import MovieListItem from './MovieListItem.js';

function MovieList(props) {
  const movies = movies.props;
  const movieListItems = movies.map((movie) =>
  <MovieListItem movie={movie} /> );

  return (
    <ul>
      {movieListItems}
    </ul>
  );
}

export default MovieList;