import Videoplayer from './videoplayer';

const movie = {
  picture: `https://www.kinopoisk.ru/images/film_big/258687.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render Videoplayer`, () => {
  const tree = renderer
  .create(
      <Videoplayer preview={movie.preview} picture={movie.picture}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
