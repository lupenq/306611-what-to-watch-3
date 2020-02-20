import Videoplayer from '../videoplayer/videoplayer';

const SmallMovieCard = ({name, picture, onMovieCardHover, onMovieCardUnhover, onMovieCardTitleClick, id, play, preview}) => {
  const playVideo = () => {
    return play === id ? <Videoplayer preview={preview} picture={picture}/> : <img src={picture} alt={name} width="280" height="175"/>;
  };

  return (

    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovieCardHover(id)}
      onMouseOut={() => onMovieCardUnhover()}
      onClick={() => onMovieCardTitleClick(id)}
    >
      <div className="small-movie-card__image">
        {playVideo()}
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
  onMovieCardTitleClick: PropTypes.func.isRequired,
  play: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]).isRequired,
  preview: PropTypes.string.isRequired
};

export default SmallMovieCard;
