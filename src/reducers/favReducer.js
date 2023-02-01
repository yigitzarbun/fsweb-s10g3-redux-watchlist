import { ADD_FAV, REMOVE_FAV } from "../actions/favActions";

const initialState = {
  favs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const newFav = action.payload;
      const copyFavs = [...state.favs, newFav];
      return {
        ...state,
        favs: [...copyFavs],
      };
    case REMOVE_FAV:
      const copyFavs2 = [...state.favs];
      const resultFavsArray = copyFavs2.filter(
        (item) => action.payload !== item.id
      );
      return {
        ...state,
        favs: resultFavsArray,
      };
    default:
      return state;
  }
};

export default reducer;
