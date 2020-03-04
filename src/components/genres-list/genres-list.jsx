import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import MoviesList from "../movies-list/movies-list";
import ShowMore from '../show-more/show-more';

const getGenresList = (filmsList) => {
  return [`All genres`, ...new Set(filmsList.map((movie) => movie.genre))];
};

const getMoviesByGenre = (genre, movies) => {
  return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
};

const GenresList = ({filmsList, genre, changeGenre, onMovieCardTitleClick, showingCardsNow}) => {
  return (
    <>
      <ul className="catalog__genres-list">
        {getGenresList(filmsList).map((activeGenre, index) => (
          <li
            className={`catalog__genres-item ${
              genre === activeGenre ? `catalog__genres-item--active` : ``
            }`}
            key={activeGenre + index}
          >
            <a
              className="catalog__genres-link"
              onClick={() => {
                changeGenre(activeGenre);
              }}
            >
              {activeGenre}
            </a>
          </li>
        ))}
      </ul>

      <MoviesList
        filmsList={getMoviesByGenre(genre, filmsList)}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
      {
        getMoviesByGenre(genre, filmsList).length >= showingCardsNow && <ShowMore />
      }
    </>
  );
};


GenresList.propTypes = {
  filmsList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  showingCardsNow: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  showingCardsNow: state.showingCardsNow,
  filmsList: state.films
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
