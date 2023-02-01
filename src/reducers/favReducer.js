import { ADD_FAV, REMOVE_FAV } from "../actions/favActions";

const initialState = {
  favs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      const newFav = action.payload;
      return {
        ...state,
        favs: [...state.favs, newFav],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favs: state.favs.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
