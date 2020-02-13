import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';

const promoSettings = {
  name: `Криминальное чтиво`,
  genre: `Драма/Криминальный`,
  date: `23 сентября 1994 г.`
};

ReactDOM.render(
    <App
      promoSettings={promoSettings}
      filmsList={films}
    />,
    document.querySelector(`#root`)
);
