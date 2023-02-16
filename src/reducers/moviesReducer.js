import { movies } from "../movies";
import {
  NEXT_PLACE,
  PREV_PLACE,
  FIRST_PLACE,
  REMOVE_MOVIE,
  ADD_MOVIE,
  INITIAL_MOVIES,
  ADD_ALL_MOVIES,
} from "../actions/movieActions";

const initialState = {
  movies: movies.slice(0, 5),
  place: 0,
};

const key = "movies";

function writeToLocalStorage(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStorage() {
  return JSON.parse(localStorage.getItem(key));
}

function getInitialMovies(key) {
  const savedMovies = localStorage.getItem(key);
  if (savedMovies) {
    return readFromLocalStorage(key);
  } else {
    return initialState.movies;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_MOVIES:
      return {
        ...state,
        movies: getInitialMovies(key),
      };
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
      writeToLocalStorage([...resultArray]);
      return {
        ...state,
        movies: [...resultArray],
      };

    case ADD_MOVIE:
      writeToLocalStorage([...state.movies, action.payload]);
      const copyMovies2 = [...state.movies];
      const newMovie = action.payload;
      const resultArray2 = [...copyMovies2, newMovie];
      return {
        ...state,
        movies: [...resultArray2],
      };

    case ADD_ALL_MOVIES:
      writeToLocalStorage([...initialState.movies]);
      return {
        ...state,
        movies: initialState.movies,
      };
    default:
      return state;
  }
};

export default reducer;
