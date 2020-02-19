const Videoplayer = ({preview, picture}) => {
  return (
    <video poster={picture} muted autoPlay width="100%" height="100%">
      <source src={preview}/>
    </video>
  );
};

Videoplayer.propTypes = {
  preview: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Videoplayer;
