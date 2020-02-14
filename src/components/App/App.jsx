import Main from '../main/main.jsx';


const App = ({filmsList, promoSettings}) => {
  return (
    <Main
      promoSettings={promoSettings}
      filmsList={filmsList}
    />
  );
};

App.propTypes = {
  promoSettings: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  filmsList: PropTypes.array.isRequired
};

export default App;
