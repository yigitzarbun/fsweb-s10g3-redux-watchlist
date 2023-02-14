import { act } from "react-dom/test-utils";
import { ADD_FAV, REMOVE_FAV, INITIAL_LOAD } from "../actions/favActions";

const localStorageKey = "favs";

const initialState = {
  favs: [],
};

function writeToLocalStorage(movie) {
  localStorage.setItem(localStorageKey, JSON.stringify(movie));
}

function readFromLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

function getInitialFavsList(localStorageKey) {
  const savedFavs = JSON.parse(localStorage.getItem(localStorageKey));
  if (savedFavs) {
    return readFromLocalStorage(localStorageKey);
  } else {
    return initialState;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_LOAD:
      return {
        ...state,
        favs: getInitialFavsList(localStorageKey),
      };
    case ADD_FAV:
      writeToLocalStorage([...state.favs, action.payload]);
      const newFav = action.payload;
      const copyFavs = [...state.favs, newFav];
      return {
        ...state,
        favs: [...copyFavs],
      };

    case REMOVE_FAV:
      const copyFavs2 = [...state.favs];
      const resultFavsArray = copyFavs2.filter(
        (item) => item.id !== action.payload
      );
      writeToLocalStorage([...resultFavsArray]);
      return {
        ...state,
        favs: resultFavsArray,
      };
    default:
      return state;
  }
};

export default reducer;
