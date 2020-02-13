import SmallMovieCard from "./SmallMovieCard";


it(`Should hover on SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`
  };


  const onMovieCardHover = jest.fn();

  const main = Enzyme.shallow(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        onMovieCardHover={onMovieCardHover}
        onMovieCardUnhover={() => {}}
      />
  );

  const movieCards = main.find(`.small-movie-card`);
  movieCards.forEach((card) => {
    // card.props().onMouseOver();
    card.simulate(`mouseover`);
  });


  //  movieCardTitle.props().onClick();

  expect(onMovieCardHover.mock.calls.length).toBe(movieCards.length);
});
