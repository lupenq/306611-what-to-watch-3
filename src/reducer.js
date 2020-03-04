import {extend} from "./utils.js";
import films from './mocks/films';

const initialState = {
  activeMovie: null,
  genre: `All genres`,
  showingCardsNow: 8,
  films,
};

const ActionType = {
  EDIT_GENRE: `EDIT_GENRE`,
  FILMS_LIST_BY_GENRE: `FILMS_LIST_BY_GENRE`,
  ADD_CARDS_WITH_MOVIES: `ADD_CARDS_WITH_MOVIES`,
  SET_ACTIVE_MOVIE: `SET_ACTIVE_MOVIE`
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
        activeMovie: films.find((item) => item.id === action.payload)
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
