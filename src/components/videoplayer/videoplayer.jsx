class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: false
    };

    this.handleVideoPlay = this.handleVideoPlay.bind(this);
  }

  handleVideoPlay() {
    const video = this._videoRef.current;
    if (video.paused) {
      video.play();
      this.setState({isPlaying: true});
    } else {
      video.pause();
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {preview} = this.props;

    return (
      <video
        ref={this._videoRef}
        onClick={this.handleVideoPlay}
        muted={true}
        autoPlay={true}
        width="100%">
        <source src={preview}/>
      </video>
    );
  }

}

Videoplayer.propTypes = {
  preview: PropTypes.string.isRequired,
  play: PropTypes.bool
};

export default Videoplayer;
