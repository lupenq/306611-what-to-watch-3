import SmallMovieCard from './small-movie-card';

it(`Render SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`
  };

  const tree = renderer
  .create(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        key={films.name}
        onMovieCardHover={() => {}}
        onMovieCardUnhover={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
