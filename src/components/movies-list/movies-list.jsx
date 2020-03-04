import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withActiveMovieCard from '../../hocs/with-active-movie-card';

const SmallMovieCardWrapped = withActiveMovieCard(SmallMovieCard);

const _getSimilarMovies = (movies, genre, id) => {
  return movies
    .filter((movie) => movie.genre === genre && movie.id !== id)
    .slice(0, 4);
};


const MoviesList = ({filmsList, onMovieCardTitleClick, similarId, similarGenre, showingCardsNow}) => {
  const similarMovie = _getSimilarMovies(filmsList, similarGenre, similarId);

  return (
    <div className="catalog__movies-list">
      {similarId
        ?
        similarMovie.map((item) => (
          <SmallMovieCardWrapped
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
            <SmallMovieCardWrapped
              name={item.name}
              picture={item.picture}
              key={item.id}
              id={item.id}
              preview={item.preview}
              onMovieCardTitleClick={onMovieCardTitleClick}
            />))
      }
    </div>
  );
};


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
