import Main from "./main";


it(`Should movie title be pressed`, () => {
  const promoSettings = {
    name: `Криминальное чтиво`,
    genre: `Драма/Криминальный`,
    date: `23 сентября 1994 г.`
  };

  const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


  const onMovieButtonClick = jest.fn();

  const main = Enzyme.shallow(
      <Main
        promoSettings={promoSettings}
        filmsList={filmsList}
        onMovieCardTitleClick={onMovieButtonClick}
      />
  );

  const movieCardTitles = main.find(`h3.small-movie-card__title`);
  movieCardTitles.forEach((title) => {
    title.props().onClick();
  });


  //  movieCardTitle.props().onClick();

  expect(onMovieButtonClick.mock.calls.length).toBe(movieCardTitles.length);
});
