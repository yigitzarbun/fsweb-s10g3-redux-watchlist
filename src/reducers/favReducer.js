import { ADD_FAV, REMOVE_FAV, INITIAL_FAVS } from "../actions/favActions";
import { toast } from "react-toastify";
const initialState = {
  favs: [],
};
const key = "fav";

function writeToLocalStorage(data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function readFromLocalStorage() {
  return JSON.parse(localStorage.getItem(key));
}

function getInitialFavs(key) {
  const savedFavs = localStorage.getItem(key);
  if (savedFavs) {
    return readFromLocalStorage(key);
  } else {
    return initialState.favs;
  }
}
const reducer = (state = getInitialFavs(key), action) => {
  switch (action.type) {
    case INITIAL_FAVS:
      return {
        ...state,
        favs: getInitialFavs(key),
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
      toast("Favorilerden çıkarıldı");
      return {
        ...state,
        favs: resultFavsArray,
      };
    default:
      return state;
  }
};

export default reducer;
