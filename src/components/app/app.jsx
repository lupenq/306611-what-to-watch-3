import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import films from '../../mocks/films';


const App = ({filmsList, setActiveMovie, activeMovie}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {
            activeMovie ?
              <MoviePage movie={activeMovie} onMovieCardTitleClick={setActiveMovie} />
              :
              <Main
                filmsList={filmsList}
                onMovieCardTitleClick={setActiveMovie}
              />
          }
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
};


App.propTypes = {
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
