export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const addFav = (movie) => {
  return { type: ADD_FAV, payload: movie };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const initialLoad = () => {
  return { type: INITIAL_LOAD };
};
