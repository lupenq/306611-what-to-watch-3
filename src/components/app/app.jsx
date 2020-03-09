import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';


const App = ({setActiveMovie, activeMovie}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {
            activeMovie ?
              <MoviePage movie={activeMovie} onMovieCardTitleClick={setActiveMovie} />
              :
              <Main
                onMovieCardTitleClick={setActiveMovie}
              />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  setActiveMovie: PropTypes.func.isRequired,
  activeMovie: PropTypes.object
};

const mapStateToProps = (state) => ({
  activeMovie: state.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMovie(id) {
    dispatch(ActionCreator.setActiveMovie(id));
  },
  getOverviews(id) {
    dispatch(ActionCreator.getOverviews(id));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
