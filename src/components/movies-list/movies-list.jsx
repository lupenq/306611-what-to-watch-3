import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import SmallMovieCard from '../small-movie-card/small-movie-card';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  _getSimilarMovies(movies, genre, id) {
    const similarMovies = movies
      .filter((movie) => movie.genre === genre && movie.id !== id)
      .slice(0, 4);
    return similarMovies;
  }

  render() {
    const {filmsList, onMovieCardTitleClick, similarId, similarGenre, showingCardsNow} = this.props;
    const similarMovie = this._getSimilarMovies(filmsList, similarGenre, similarId);

    return <div className="catalog__movies-list">
      {similarId
        ?
        similarMovie.map((item) => (
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.id}
            id={item.id}
            preview={item.preview}
            onMovieCardTitleClick={onMovieCardTitleClick}
          />))
        :
        filmsList
          .slice(0, showingCardsNow)
          .map((item) => (
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
  similarGenre: PropTypes.string,
  showingCardsNow: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  showingCardsNow: state.showingCardsNow,
});

const mapDispatchToProps = (dispatch) => ({
  addCardsWithMovies(count) {
    dispatch(ActionCreator.addCardsWithMovies(count));
  }
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
