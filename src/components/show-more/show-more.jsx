import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

function ShowMore({addCardsWithMovies}) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => addCardsWithMovies()}
      >Show more</button>
    </div>
  );
}

ShowMore.propTypes = {
  addCardsWithMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addCardsWithMovies(count) {
    dispatch(ActionCreator.addCardsWithMovies(count));
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
