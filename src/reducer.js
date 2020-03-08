import {extend} from "./utils.js";
import {adaptMoviesData, adaptMovieData} from './utils';


const initialState = {
  activeMovie: null,
  genre: `All genres`,
  headerMovie: {},
  showingCardsNow: 8,
  films: [],
};

const ActionType = {
  EDIT_GENRE: `EDIT_GENRE`,
  FILMS_LIST_BY_GENRE: `FILMS_LIST_BY_GENRE`,
  ADD_CARDS_WITH_MOVIES: `ADD_CARDS_WITH_MOVIES`,
  SET_ACTIVE_MOVIE: `SET_ACTIVE_MOVIE`,
  GET_MOVIES: `GET_MOVIES`,
  GET_HEADER_MOVIE: `GET_HEADER_MOVIE`
};

export const Operation = {
  getMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.getMovies(adaptMoviesData(response.data)));
    });
  },
  getHeaderMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.getHeaderMovie(adaptMovieData(response.data)));
    });
  }
};

const ActionCreator = {
  changeGenre: (genre = `All genres`) => ({
    type: ActionType.EDIT_GENRE,
    payload: genre
  }),
  addCardsWithMovies: (count = 8) => ({
    type: ActionType.ADD_CARDS_WITH_MOVIES,
    payload: count
  }),
  setActiveMovie: (id) => ({
    type: ActionType.SET_ACTIVE_MOVIE,
    payload: id
  }),
  getMovies: (movies) => ({
    type: ActionType.GET_MOVIES,
    payload: movies
  }),
  getHeaderMovie: (movie) => ({
    type: ActionType.GET_HEADER_MOVIE,
    payload: movie
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_GENRE:
      return extend(state, {
        genre: action.payload,
        showingCardsNow: 8
      });
    case ActionType.ADD_CARDS_WITH_MOVIES:
      return extend(state, {
        showingCardsNow: state.showingCardsNow + action.payload,
      });
    case ActionType.SET_ACTIVE_MOVIE:
      return extend(state, {
        activeMovie: state.films.find((item) => item.id === action.payload)
      });
    case ActionType.GET_MOVIES:
      return extend(state, {
        films: action.payload
      });
    case ActionType.GET_HEADER_MOVIE:
      return extend(state, {
        headerMovie: action.payload
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
