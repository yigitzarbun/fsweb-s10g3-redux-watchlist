import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import favReducer from "./favReducer";

const rootReducer = combineReducers({
  moviesReducer,
  favReducer,
});

export default rootReducer;
