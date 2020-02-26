import Videoplayer from '../videoplayer/videoplayer';

const PLAY_TIMEOUT = 1000;

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeHoverMovieId: ``,
      isPlaying: false
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.setState({activeHoverMovieId: null, isPlaying: false});
  }

  _togglePlay(id) {
    this.timer = setTimeout(() => {
      if (this.state.activeHoverMovieId === id) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, PLAY_TIMEOUT);
  }

  _movieCardHoverHandler(id) {
    this.setState(
        () => ({activeHoverMovieId: id}),
        () => this._togglePlay(id));
  }

  _movieCardUnhoverHandler() {
    this.setState({activeHoverMovieId: null, isPlaying: false});
  }
  render() {
    const {name, picture, onMovieCardTitleClick, id, preview} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => this._movieCardHoverHandler(id)}
        onMouseOut={() => this._movieCardUnhoverHandler()}
        onClick={() => onMovieCardTitleClick(id)}
      >
        <div className="small-movie-card__image">
          {this.state.isPlaying ?
            <Videoplayer preview={preview} play={this.state.isPlaying}/>
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
  }
}

SmallMovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  preview: PropTypes.string.isRequired
};

export default SmallMovieCard;
