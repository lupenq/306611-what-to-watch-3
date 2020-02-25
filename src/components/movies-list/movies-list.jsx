import SmallMovieCard from '../small-movie-card/small-movie-card';

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

  _togglePlay(id) {
    setTimeout(() => {
      if (this.state.activeHoverMovieId === id) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, 1000);
  }

  _movieCardHoverHandler(id) {
    this.setState(
        () => ({activeHoverMovieId: id}),
        () => this._togglePlay(id));
  }

  _movieCardUnhoverHandler() {
    this.setState({activeHoverMovieId: null, isPlaying: false});
  }

  componentWillUnmount() {
    this.setState({activeHoverMovieId: null, isPlaying: false});
  }

  render() {
    const {filmsList, onMovieCardTitleClick} = this.props;

    return <div className="catalog__movies-list">
      {
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
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
