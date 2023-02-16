export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const INITIAL_FAVS = "INITIAL_FAVS";
export const REMOVE_ALL_FAVS = "REMOVE_ALL_FAVS";
export const loadInitialFavs = () => {
  return { type: INITIAL_FAVS };
};
export const addFav = (movie) => {
  return { type: ADD_FAV, payload: movie };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const removeAllFavs = () => {
  return { type: REMOVE_ALL_FAVS };
};
