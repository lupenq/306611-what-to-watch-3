import SmallMovieCard from '../SmallMovieCard/SmallMovieCard';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeHoverMovieName: ``};

    this.movieCardHoverHandler = this.movieCardHoverHandler.bind(this);
    this.movieCardUnhoverHandler = this.movieCardUnhoverHandler.bind(this);
  }

  movieCardHoverHandler(name) {
    this.setState({activeHoverMovieName: name});
  }

  movieCardUnhoverHandler() {
    this.setState({activeHoverMovieName: ``});
  }

  render() {
    const {filmsList} = this.props;

    return <div className="catalog__movies-list">
      {
        filmsList.map((item, index) =>(
          <SmallMovieCard
            name={item.name}
            picture={item.picture}
            key={item.name + index}
            onMovieCardHover={this.movieCardHoverHandler}
            onMovieCardUnhover={this.movieCardUnhoverHandler}
          />
        )
        )
      }
    </div>;
  }
}

export default MoviesList;
