import {Fragment} from 'react';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);


    this.state = {
      activeTab: `overview`
    };

  }

  getRatingLevel() {
    let rating = +this.props.movie.ratingScore;

    switch (true) {
      case rating >= 0 && rating <= 3:
        return `Bad`;
      case rating >= 3 && rating <= 5:
        return `Normal`;
      case rating >= 5 && rating <= 8:
        return `Good`;
      case rating >= 8 && rating < 10:
        return `Very good`;
      case rating === 10:
        return `Awesome`;
    }

    return null;
  }

  _getActiveClassName(tab) {
    return this.state.activeTab === tab ? `movie-nav__item--active` : ``;
  }

  _activeTabHandler(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const {movie} = this.props;

    return (
      <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li
              onClick={
                (e) => {
                  e.preventDefault();
                  this._activeTabHandler(`overview`);
                }}
              className={`movie-nav__item ${this._getActiveClassName(`overview`)}`}>
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li
              onClick={
                (e) => {
                  e.preventDefault();
                  this._activeTabHandler(`details`);
                }}
              className={`movie-nav__item ${this._getActiveClassName(`details`)}`}>
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li
              onClick={
                (e) => {
                  e.preventDefault();
                  this._activeTabHandler(`reviews`);
                }}
              className={`movie-nav__item ${this._getActiveClassName(`reviews`)}`}>
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>
        {
          this.state.activeTab === `overview` &&
          <>
          <div className="movie-rating">
            <div className="movie-rating__score">{movie.ratingScore}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{this.getRatingLevel()}</span>
              <span className="movie-rating__count">{movie.ratingCount} ratings</span>
            </p>
          </div>

        <div className="movie-card__text">
          <p>{movie.description}</p>

          <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

          <p className="movie-card__starring"><strong>Starring:&nbsp;
            {
              movie.starring.join(`, `)
            } and other</strong></p>
        </div>
        </>
        }
        {
          this.state.activeTab === `details` &&
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{movie.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {
                    movie.starring.map((name, index) => (
                      <Fragment key={name + index}>
                        {name} <br />
                      </Fragment>
                    ))
                  }
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{movie.runTime}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{movie.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{movie.year}</span>
              </p>
            </div>
          </div>
        }
        {
          this.state.activeTab === `reviews` &&
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {movie.reviews.map((review, index) => (
                <div className="review" key={index + review.author}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date">
                        {review.date}
                      </time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </>
    );
  }
}

Tabs.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.array,
    description: PropTypes.string,
    bigPoster: PropTypes.string,
    picture: PropTypes.string,
    preview: PropTypes.string,
    ratingScore: PropTypes.string,
    ratingCount: PropTypes.string,
    runTime: PropTypes.string,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number,
          date: PropTypes.string,
          author: PropTypes.string,
          text: PropTypes.string
        })
    )
  })
};

export default Tabs;
