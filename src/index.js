import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import {createStore} from 'redux';
import {reducer} from "./reducer.js";
import {Provider} from 'react-redux';

const promoSettings = {
  name: `Криминальное чтиво`,
  genre: `Драма/Криминальный`,
  date: `23 сентября 1994 г.`
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoSettings={promoSettings}
        filmsList={films}
      />
    </Provider>
    ,
    document.querySelector(`#root`)
);
