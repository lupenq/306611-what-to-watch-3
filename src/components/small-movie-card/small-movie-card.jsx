import Videoplayer from '../videoplayer/videoplayer';
import PropTypes from "prop-types";


const SmallMovieCard = ({name, picture, onMovieCardTitleClick, onMovieCardHover, onMovieCardUnhover, preview, isPlaying, id}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onMovieCardHover(id)}
      onMouseOut={() => onMovieCardUnhover()}
      onClick={() => onMovieCardTitleClick(id)}
    >
      <div className="small-movie-card__image">
        {isPlaying ?
          <Videoplayer preview={preview}/>
          : <img src={picture} alt={name} width="280" height="175"/>}
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
  onMovieCardTitleClick: PropTypes.func.isRequired,
  preview: PropTypes.string.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardUnhover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  id: PropTypes.number
};

export default SmallMovieCard;
