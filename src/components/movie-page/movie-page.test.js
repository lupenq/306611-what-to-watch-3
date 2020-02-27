import MoviePage from './movie-page';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const movie = {
  id: 1,
  name: `Интерстеллар1`,
  genre: `Фантастика`,
  year: `2014`,
  director: `Кристофер Нолан`,
  starring: [
    `Мэттью МакКонахи`,
    `Энн Хэтэуэй`,
    `Джессика Честейн`,
    `Маккензи Фой`,
    `Майкл Кейн`,
    `Дэвид Гяси`,
    `Уэс Бентли`,
    `Мэтт Дэймон`,
  ],
  description: `Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.`,
  bigPoster: `http://cinemaplex.ru/wp-content/uploads/2014/11/interstellar.jpg`,
  picture: `https://www.kinopoisk.ru/images/film_big/258687.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ratingScore: `2.5`,
  ratingCount: `759`,
  runTime: `1h 40m`,
  reviews: [
    {
      rating: 9,
      date: `December 24, 2016`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    },
    {
      rating: 9,
      date: `December 24, 2016`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    },
    {
      rating: 9,
      date: `December 24, 2016`,
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    },
  ]
};

it(`Render MoviePage`, () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    genre: `All genres`,
    showingCardsNow: 8,
    films: movie
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <MoviePage
          movie={movie}
          onMovieCardTitleClick={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
