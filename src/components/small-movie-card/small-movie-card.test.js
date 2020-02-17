import SmallMovieCard from './small-movie-card';

it(`Render SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1
  };

  const tree = renderer
  .create(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        id={films.id}
        key={films.name}
        onMovieCardHover={() => {}}
        onMovieCardUnhover={() => {}}
        onMovieCardTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
