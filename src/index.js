import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const promoSettings = {
  name: `Криминальное чтиво`,
  genre: `Драма/Криминальный`,
  date: `23 сентября 1994 г.`
};

const filmsList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      promoSettings={promoSettings}
      filmsList={filmsList}
    />,
    document.querySelector(`#root`)
);
