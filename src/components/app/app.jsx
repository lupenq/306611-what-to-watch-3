import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import films from '../../mocks/films';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  _renderApp() {
    const {filmsList, promoSettings, setActiveMovie, activeMovie} = this.props;

    if (activeMovie) {
      return (
        <MoviePage
          movie={activeMovie}
          onMovieCardTitleClick={setActiveMovie}
        />
      );
    }

    return (
      <Main
        promoSettings={promoSettings}
        filmsList={filmsList}
        onMovieCardTitleClick={setActiveMovie}
      />
    );
  }

  render() {
    const {setActiveMovie} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage
              movie={films[0]}
              onMovieCardTitleClick={setActiveMovie}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoSettings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  filmsList: PropTypes.array.isRequired,
  setActiveMovie: PropTypes.func.isRequired,
  activeMovie: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeMovie: state.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMovie(id) {
    dispatch(ActionCreator.setActiveMovie(id));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);