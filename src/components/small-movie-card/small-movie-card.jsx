const SmallMovieCard = ({name, picture, onMovieCardHover, onMovieCardUnhover, onMovieCardTitleClick, id}) => {

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovieCardHover(name)}
      onMouseOut={() => onMovieCardUnhover()}
      onClick={() => onMovieCardTitleClick(id)}
    >
      <div className="small-movie-card__image">
        <img src={picture} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link"
          href="movie-page.html"
          onClick={(e) => {
            e.preventDefault();
            onMovieCardTitleClick(id);
          }}
        >{name}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardUnhover: PropTypes.func.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
