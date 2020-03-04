import SmallMovieCard from "./small-movie-card";


it(`Should hover on SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  };

  jest.useFakeTimers();

  const onMovieCardTitleClick = jest.fn();
  const onMovieCardHover = jest.fn();
  const onMovieCardUnhover = jest.fn();

  const main = Enzyme.shallow(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        id={films.id}
        preview={films.preview}
        onMovieCardHover={onMovieCardHover}
        onMovieCardUnhover={onMovieCardUnhover}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
  );

  const movieCards = main.find(`.small-movie-card`);
  movieCards.first().simulate(`mouseover`);
  jest.advanceTimersByTime(1000);

  expect(onMovieCardHover.mock.calls.length).toBe(movieCards.length);
});

it(`Should click on SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1,
    play: true,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  };


  const onMovieCardHover = jest.fn();
  const onMovieCardTitleClick = jest.fn();

  const main = Enzyme.shallow(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        id={films.id}
        play={films.play}
        preview={films.preview}
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
