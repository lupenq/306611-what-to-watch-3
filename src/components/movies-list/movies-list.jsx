import SmallMovieCard from '../small-movie-card/small-movie-card';

const PLAY_TIMEOUT = 1000;

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHoverMovieId: ``,
      isPlaying: false
    };

    this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
    this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
    this._togglePlay = this._togglePlay.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({activeHoverMovieId: null, isPlaying: false});
  }

  _togglePlay(id) {
    this.timer = setTimeout(() => {
      if (this.state.activeHoverMovieId === id) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, PLAY_TIMEOUT);
  }

  _movieCardHoverHandler(id) {
    this.setState(
        () => ({activeHoverMovieId: id}),
        () => this._togglePlay(id));
  }

  _movieCardUnhoverHandler() {
    this.setState({activeHoverMovieId: null, isPlaying: false});
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
            play={this.state.activeHoverMovieId === item.id && this.state.isPlaying}
            onMovieCardTitleClick={onMovieCardTitleClick}
            onMovieCardHover={this._movieCardHoverHandler}
            onMovieCardUnhover={this._movieCardUnhoverHandler}
          />))
        :
        filmsList.map((item) => (
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.id}
            id={item.id}
            preview={item.preview}
            play={this.state.activeHoverMovieId === item.id && this.state.isPlaying}
            onMovieCardTitleClick={onMovieCardTitleClick}
            onMovieCardHover={this._movieCardHoverHandler}
            onMovieCardUnhover={this._movieCardUnhoverHandler}
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
