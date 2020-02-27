import {ShowMore} from "./show-more";


it(`Should render ShowMore`, () => {

  const tree = renderer
    .create(
        <ShowMore addCardsWithMovies={() => {}}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
