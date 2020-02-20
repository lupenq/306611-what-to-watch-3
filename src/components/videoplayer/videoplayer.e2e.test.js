import Videoplayer from "./videoplayer";

const movie = {
  picture: `https://www.kinopoisk.ru/images/film_big/258687.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Should click on Videoplayer`, () => {
  const play = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  const videoplayer = Enzyme.mount(
      <Videoplayer preview={movie.preview} picture={movie.picture}/>
  );


  expect(videoplayer.state(`isPlaying`)).toBe(false);
  videoplayer.simulate(`click`);
  expect(videoplayer.state(`isPlaying`)).toBe(true);

  expect(play).toHaveBeenCalled();
  play.mockRestore();
});
