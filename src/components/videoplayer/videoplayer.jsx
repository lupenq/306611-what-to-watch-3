class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }


  render() {
    const {preview} = this.props;

    return (
      <video
        ref={this._videoRef}
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
};

export default Videoplayer;
