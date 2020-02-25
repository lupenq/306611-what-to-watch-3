import MoviePage from './movie-page';

it(`Render MoviePage`, () => {
  const ID = 1;

  const tree = renderer
  .create(
      <MoviePage
        id={ID}
        onMovieCardTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
