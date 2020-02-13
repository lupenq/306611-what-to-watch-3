const SmallMovieCard = ({name, picture, onMovieCardHover, onMovieCardUnhover}) => {

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovieCardHover(name)}
      onMouseOut={() => onMovieCardUnhover()}
    >
      <div className="small-movie-card__image">
        <img src={picture} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardUnhover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
