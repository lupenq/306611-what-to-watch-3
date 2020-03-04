import withActiveMovieCard from '../hocs/with-active-movie-card';

const IMG_URL = `https://api.adorable.io/avatars/128`;

const films = {
  name: `Интерстеллар`,
  picture: `${IMG_URL}`,
  id: 1,
  play: true,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const MockComponent = () => <div></div>;
const MockComponentWrapped = withActiveMovieCard(MockComponent);

it(`withActiveMovieCard is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          name={films.name}
          picture={films.picture}
          key={films.id}
          id={films.id}
          preview={films.preview}
          onMovieCardTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
