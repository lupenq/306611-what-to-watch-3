import {ShowMore} from "./show-more";


it(`Should click on button ShowMore`, () => {
  const addCardsWithMovies = jest.fn();

  const tree = Enzyme.mount(
      <ShowMore addCardsWithMovies={addCardsWithMovies}/>
  );

  tree.find(`button.catalog__button`).simulate(`click`);

  expect(addCardsWithMovies.mock.calls.length).toBe(1);
});
