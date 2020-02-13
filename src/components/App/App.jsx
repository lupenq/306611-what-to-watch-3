import Main from '../Main/Main.jsx';

const movieCardTitleHandler = (e) => {
  e.preventDefault();
};

const App = ({filmsList, promoSettings}) => {
  return (
    <Main
      promoSettings={promoSettings}
      filmsList={filmsList}
      onMovieCardTitleClick={movieCardTitleHandler}
    />
  );
};

App.propTypes = {
  promoSettings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  filmsList: PropTypes.array.isRequired
};

export default App;
