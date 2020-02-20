import App from './app';

it(`Render App`, () => {
  const promoSettings = {
    name: `Криминальное чтиво`,
    genre: `Драма/Криминальный`,
    date: `23 сентября 1994 г.`
  };

  const filmsList = [
    {
      id: 1,
      name: `Интерстеллар1`,
      genre: `Фантастика`,
      year: `2014`,
      director: `Кристофер Нолан`,
      starring: `Мэттью МакКонахи, Энн Хэтэуэй, Джессика Честейн, Маккензи Фой, Майкл Кейн, Дэвид Гяси, Уэс Бентли, Мэтт Дэймон`,
      description: `Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.`,
      bigPoster: `http://cinemaplex.ru/wp-content/uploads/2014/11/interstellar.jpg`,
      picture: `https://www.kinopoisk.ru/images/film_big/258687.jpg`,
      ratingScore: `2.5`,
      ratingLevel: `Very good`,
      ratingCount: `759`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    {
      id: 2,
      name: `Зеленая книга`,
      genre: `комедия`,
      year: `2018`,
      director: `Питер Фаррелли`,
      starring: `Вигго Мортенсен, Махершала Али, Линда Карделлини, Себастьян Манискалко, Димитар Маринов, Майк Хаттон`,
      description: `1960-е годы. После закрытия нью-йоркского ночного клуба на ремонт вышибала Тони по прозвищу Болтун ищет подработку на пару месяцев. Как раз в это время Дон Ширли, утонченный светский лев, богатый и талантливый чернокожий музыкант, исполняющий классическую музыку, собирается в турне по южным штатам, где ещё сильны расистские убеждения и царит сегрегация. Он нанимает Тони в качестве водителя, телохранителя и человека, способного решать текущие проблемы. У этих двоих так мало общего, и эта поездка навсегда изменит жизнь обоих.`,
      bigPoster: `https://cinemaholics.ru/content/images/2018/08/green-book_universal-1920x1181.jpg`,
      picture: `https://www.kinopoisk.ru/images/film_big/1108577.jpg`,
      ratingScore: `10`,
      ratingLevel: `Very good`,
      ratingCount: `2566`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    }];

  const tree = renderer
  .create(<App
    promoSettings={promoSettings}
    filmsList={filmsList}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
