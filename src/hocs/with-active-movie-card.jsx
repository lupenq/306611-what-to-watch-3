const PLAY_TIMEOUT = 1000;

const withActiveMovieCard = (Component) => {
  class WithActiveMovieCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeHoverMovieId: ``,
        isPlaying: false
      };

      this._movieCardHoverHandler = this._movieCardHoverHandler.bind(this);
      this._movieCardUnhoverHandler = this._movieCardUnhoverHandler.bind(this);
      this._togglePlay = this._togglePlay.bind(this);
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
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          onMovieCardHover={this._movieCardHoverHandler}
          onMovieCardUnhover={this._movieCardUnhoverHandler}
        />
      );
    }
  }


  return WithActiveMovieCard;
};

export default withActiveMovieCard;
