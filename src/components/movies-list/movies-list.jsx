import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeHoverMovieName: ``};

    this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
    this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
  }

  // _movieCardHoverHandler(id) {
  //   setTimeout(() => this.setState({activeHoverMovieName: id}), 1000);
  // }

  _movieCardHoverHandler(id) {
    this.setState({activeHoverMovieName: id});
  }

  _movieCardUnhoverHandler() {
    this.setState({activeHoverMovieName: null});
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
            play={this.state.activeHoverMovieName ? this.state.activeHoverMovieName : null}
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
