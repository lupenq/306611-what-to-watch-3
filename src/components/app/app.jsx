import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import films from '../../mocks/films';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: null
    };

    this._movieCardTitleClickHandler = this._movieCardTitleClickHandler.bind(this);
  }

  _movieCardTitleClickHandler(id) {
    window.scroll(0, 0);
    this.setState({
      activeMovie: films.find((item) => item.id === id)
    });
  }

  _renderApp() {
    const {filmsList, promoSettings} = this.props;

    if (this.state.activeMovie) {
      return (
        <MoviePage
          movie={this.state.activeMovie}
          onMovieCardTitleClick={this._movieCardTitleClickHandler}
        />
      );
    }

    return (
      <Main
        promoSettings={promoSettings}
        filmsList={filmsList}
        onMovieCardTitleClick={this._movieCardTitleClickHandler}
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
              movie={films[0]}
              onMovieCardTitleClick={this._movieCardTitleClickHandler}
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
