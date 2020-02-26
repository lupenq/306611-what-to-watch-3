import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _getSimilarMovies(movies, genre, id) {
    const simiLarMovies = movies
      .filter((movie) => movie.genre === genre && movie.id !== id)
      .slice(0, 4);
    return simiLarMovies;
  }

  render() {
    const {filmsList, onMovieCardTitleClick, similarId, similarGenre} = this.props;
    const simiLarMovie = this._getSimilarMovies(filmsList, similarGenre, similarId);

    return <div className="catalog__movies-list">
      {similarId
        ?
        simiLarMovie.map((item) => (
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.id}
            id={item.id}
            preview={item.preview}
            onMovieCardTitleClick={onMovieCardTitleClick}
          />))
        :
        filmsList.map((item) => (
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.id}
            id={item.id}
            preview={item.preview}
            onMovieCardTitleClick={onMovieCardTitleClick}
          />))
      }
    </div>;
  }
}

MoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
  ),
  onMovieCardTitleClick: PropTypes.func.isRequired,
  similarId: PropTypes.number,
  similarGenre: PropTypes.string
};

export default MoviesList;
