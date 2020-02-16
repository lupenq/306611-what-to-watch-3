import Main from './main';

it(`Render Main`, () => {
  const promoSettings = {
    name: `Криминальное чтиво`,
    genre: `Драма/Криминальный`,
    date: `23 сентября 1994 г.`
  };

  const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

  const tree = renderer
  .create(
      <Main
        promoSettings={promoSettings}
        filmsList={filmsList}
        onMovieCardTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
