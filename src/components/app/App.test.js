import App from './app';

it(`Render App`, () => {
  const promoSettings = {
    name: `Криминальное чтиво`,
    genre: `Драма/Криминальный`,
    date: `23 сентября 1994 г.`
  };

  const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

  const tree = renderer
  .create(<App
    promoSettings={promoSettings}
    filmsList={filmsList}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
