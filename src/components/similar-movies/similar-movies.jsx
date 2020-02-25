import MoviesList from '../movies-list/movies-list';

const getSimilarMovies = (movies, genre, id) => {
  return movies.filter(
      (similarMovie) => similarMovie.genre === genre && similarMovie.id !== id
  );
};

const SimilarMovies = ({films, genre, movieId, onMovieCardTitleClick}) => {
  return (
    <MoviesList
      filmsList={getSimilarMovies(films, genre, movieId)}
      onMovieCardTitleClick={onMovieCardTitleClick}
    />
  );
};

SimilarMovies.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default SimilarMovies;
