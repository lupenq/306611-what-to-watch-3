import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';

const promoSettings = {
  name: `Криминальное чтиво`,
  genre: `Драма/Криминальный`,
  date: `23 сентября 1994 г.`
};

ReactDOM.render(
    <App
      promoSettings={promoSettings}
    />,
    document.querySelector(`#root`)
);
