import SmallMovieCard from './small-movie-card';

it(`Render SmallMovieCard`, () => {
  const IMG_URL = `https://api.adorable.io/avatars/128`;

  const films = {
    name: `Интерстеллар`,
    picture: `${IMG_URL}`,
    id: 1,
    play: true,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  };

  const tree = renderer
  .create(
      <SmallMovieCard
        name={films.name}
        picture={films.picture}
        id={films.id}
        key={films.name}
        play={films.play}
        preview={films.preview}
        onMovieCardHover={() => {}}
        onMovieCardUnhover={() => {}}
        onMovieCardTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
