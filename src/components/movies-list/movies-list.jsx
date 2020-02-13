import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeHoverMovieName: ``};

    this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
    this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
  }

  _movieCardHoverHandler(name) {
    this.setState({activeHoverMovieName: name});
  }

  _movieCardUnhoverHandler() {
    this.setState({activeHoverMovieName: ``});
  }

  render() {
    const {filmsList} = this.props;

    return <div className="catalog__movies-list">
      {
        filmsList.map((item, index) =>(
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.name + index}
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
        picture: PropTypes.string.isRequired
      })
  ),
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
