import MoviesList from './movies-list';

it(`Render MoviesList`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = [
    {
      name: `Интерстеллар`,
      picture: `${IMG_URL}`
    },
    {
      name: `Ирландец`,
      picture: `${IMG_URL}`
    },
    {
      name: `Один дома`,
      picture: `${IMG_URL}`
    },
    {
      name: `Танго в Париже`,
      picture: `${IMG_URL}`
    },
    {
      name: `Зелёная книга`,
      picture: `${IMG_URL}`
    },
    {
      name: `Мимино`,
      picture: `${IMG_URL}`
    },
    {
      name: `Человек-паук`,
      picture: `${IMG_URL}˙}`
    },
    {
      name: `Бойцовский клуб`,
      picture: `${IMG_URL}}`
    }
  ];


  const tree = renderer
  .create(
      <MoviesList
        filmsList={films}
        onMovieCardTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
