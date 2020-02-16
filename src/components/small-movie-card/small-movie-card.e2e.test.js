import SmallMovieCard from "./small-movie-card";


it(`Should hover on SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1
  };


  const onMovieCardHover = jest.fn();
  const onMovieCardTitleClick = jest.fn();

  const main = Enzyme.shallow(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        id={films.id}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMovieCardHover={onMovieCardHover}
        onMovieCardUnhover={() => {}}
      />
  );

  const movieCards = main.find(`.small-movie-card`);
  movieCards.forEach((card) => {
    card.simulate(`mouseover`);
  });


  expect(onMovieCardHover.mock.calls.length).toBe(movieCards.length);
});

it(`Should click on SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1
  };


  const onMovieCardHover = jest.fn();
  const onMovieCardTitleClick = jest.fn();

  const main = Enzyme.shallow(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        id={films.id}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMovieCardHover={onMovieCardHover}
        onMovieCardUnhover={() => {}}
      />
  );

  const movieCards = main.find(`.small-movie-card`);
  movieCards.forEach((card) => {
    card.simulate(`click`);
  });


  expect(onMovieCardTitleClick.mock.calls.length).toBe(movieCards.length);
});
