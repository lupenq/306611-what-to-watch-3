import Videoplayer from './videoplayer';

const movie = {
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render Videoplayer`, () => {
  const tree = renderer
  .create(
      <Videoplayer preview={movie.preview}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
