import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createAPI} from './api';
import {composeWithDevTools} from "redux-devtools-extension";
import {Operation} from './reducer';


const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(Operation.getMovies());
store.dispatch(Operation.getHeaderMovie());
// store.dispatch(Operation.getOverviews());


ReactDOM.render(
    <Provider store={store}>
      <App getOverviews={(id) => store.dispatch(Operation.getOverviews(id))} />
    </Provider>
    ,
    document.querySelector(`#root`)
);
