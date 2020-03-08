import {connect} from "react-redux";
import GenresList from "../genres-list/genres-list";

const Main = ({headerMovie, onMovieCardTitleClick}) => {
  return (
    <>
  <section className="movie-card">
    <div className="movie-card__bg">
      <img src={headerMovie.bigPosterUrl} alt={headerMovie.name} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={headerMovie.posterUrl} alt={headerMovie.name} width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{headerMovie.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{headerMovie.genre}</span>
            <span className="movie-card__year">{headerMovie.releaseYear}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="page-content">
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList onMovieCardTitleClick={onMovieCardTitleClick}/>

    </section>

    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  </div>
  </>
  );
};

Main.propTypes = {
  headerMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    bigPosterUrl: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    runTime: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  filmsList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  headerMovie: state.headerMovie
});

export default connect(mapStateToProps)(Main);
