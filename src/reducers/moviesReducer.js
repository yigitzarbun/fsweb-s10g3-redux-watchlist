import { movies } from "../movies";
import { NEXT_PLACE, PREV_PLACE, FIRST_PLACE } from "../actions/movieActions";

const initialState = {
  movies: movies,
  place: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PLACE:
      let copyPlace = state.place;
      copyPlace = copyPlace + 1;

      return {
        ...state,
        place: copyPlace,
      };
    case PREV_PLACE:
      let copyPlace2 = state.place;
      copyPlace2 = copyPlace2 - 1;
      return {
        ...state,
        place: copyPlace2,
      };

    case FIRST_PLACE:
      let copyPlace3 = state.place;
      copyPlace3 = 0;
      return {
        ...state,
        place: copyPlace3,
      };
    default:
      return state;
  }
};

export default reducer;
