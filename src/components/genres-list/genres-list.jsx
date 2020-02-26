import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import MoviesList from "../movies-list/movies-list";
import ShowMore from '../show-more/show-more';

class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getGenresList(filmsList) {
    return [`All genres`, ...new Set(filmsList.map((movie) => movie.genre))];
  }

  getMoviesByGenre(genre, movies) {
    return genre === `All genres` ? movies : movies.filter((movie) => movie.genre === genre);
  }

  render() {
    const {filmsList, genre, changeGenre, onMovieCardTitleClick, showingCardsNow} = this.props;

    return (
      <>
        <ul className="catalog__genres-list">
          {this.getGenresList(filmsList).map((activeGenre, index) => (
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
          filmsList={this.getMoviesByGenre(genre, filmsList)}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
        {
          this.getMoviesByGenre(genre, filmsList) <= showingCardsNow ? null : <ShowMore />
        }
      </>
    );
  }
}


GenresList.propTypes = {
  filmsList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  showingCardsNow: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  filmsList: state.films,
  showingCardsNow: state.showingCardsNow,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
