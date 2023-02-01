import { movies } from "../movies";
const initialState = {
  movies: movies,
  place: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
