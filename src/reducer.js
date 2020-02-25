import {extend} from "./utils.js";
import films from './mocks/films';

const initialState = {
  genre: `All genres`,
  films,
};

const ActionType = {
  EDIT_GENRE: `EDIT_GENRE`,
  FILMS_LIST_BY_GENRE: `FILMS_LIST_BY_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre = `All genres`) => ({
    type: ActionType.EDIT_GENRE,
    payload: genre
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
