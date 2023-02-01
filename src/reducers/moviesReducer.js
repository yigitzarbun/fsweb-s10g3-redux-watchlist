import { movies } from "../movies";
import {
  NEXT_PLACE,
  PREV_PLACE,
  FIRST_PLACE,
  REMOVE_MOVIE,
  ADD_MOVIE,
} from "../actions/movieActions";

const initialState = {
  movies: movies.slice(0, 5),
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

    case REMOVE_MOVIE:
      const copyMovies = [...state.movies];
      let resultArray = copyMovies.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        movies: [...resultArray],
      };

    case ADD_MOVIE:
      const copyMovies2 = [...state.movies];
      const newMovie = action.payload;
      const resultArray2 = [...copyMovies2, newMovie];
      return {
        ...state,
        movies: [...resultArray2],
      };
    default:
      return state;
  }
};

export default reducer;
