import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import moviePage from '../../mocks/moviePage';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeMovieId: null};

    this._MovieCardTitleClickHandler = this._MovieCardTitleClickHandler.bind(this);
  }

  _MovieCardTitleClickHandler(id) {
    this.setState({activeMovieId: id});
  }

  _renderApp() {
    const {filmsList, promoSettings} = this.props;

    if (this.state.activeMovieId) {
      return (
        <MoviePage
          id={this.state.activeMovieId}
        />
      );
    }

    return (
      <Main
        promoSettings={promoSettings}
        filmsList={filmsList}
        onMovieCardTitleClick={this._MovieCardTitleClickHandler}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage
              id={moviePage.id}
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
  filmsList: PropTypes.array.isRequired
};

export default App;
