import {reducer, ActionCreator, ActionType} from "./reducer.js";
import films from "./mocks/films";

const initialState = {
  genre: `All genres`,
  showingCardsNow: 8,
  films
};

it(`Reducer without parameters should return initialState`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Reducer should edit genre in store`, () => {
  expect(reducer(
      {genre: `All genres`},
      {
        type: ActionType.EDIT_GENRE,
        payload: `Fantasy`
      }
  )
  ).toEqual({
    genre: `Fantasy`
  });
});

describe(`ActionCreator work correctly`, () => {
  it(`ActionCreator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Fantasy`)).toEqual({
      type: ActionType.EDIT_GENRE,
      payload: `Fantasy`
    });
  });

  it(`ActionCreator for genre changing returns default genre, if no genre selected`, () => {
    expect(ActionCreator.changeGenre()).toEqual({
      type: ActionType.EDIT_GENRE,
      payload: `All genres`
    });
  });
});
