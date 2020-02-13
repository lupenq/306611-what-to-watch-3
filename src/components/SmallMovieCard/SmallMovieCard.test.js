import SmallMovieCard from './SmallMovieCard';

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
        key={films.name + Math.random()}
        onMovieCardHover={() => {}}
        onMovieCardUnhover={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
