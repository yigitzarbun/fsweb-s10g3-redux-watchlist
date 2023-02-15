import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addFav, removeFav } from "./actions/favActions";
import {
  nextPlace,
  prevPlace,
  firstPlace,
  removeMovie,
} from "./actions/movieActions";

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.moviesReducer.movies);
  const favMovies = useSelector((store) => store.favReducer.favs);
  const sira = useSelector((store) => store.moviesReducer.place);
  function handleNext() {
    dispatch(nextPlace());
  }
  function handlePrev() {
    dispatch(prevPlace());
  }

  function handleFirstMovie() {
    dispatch(firstPlace());
  }

  const handleAddFav = () => {
    dispatch(addFav(movies[sira]));
    dispatch(removeMovie(movies[sira].id));
    dispatch(firstPlace());
  };

  const handleRemove = () => {
    dispatch(removeFav(movies[sira].id));
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {sira > 0 && (
              <button
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                onClick={handleFirstMovie}
              >
                Başa Dön
              </button>
            )}

            {sira > 0 && (
              <button
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
                onClick={handlePrev}
              >
                Önceki
              </button>
            )}

            {sira < movies.length - 1 && (
              <button
                onClick={handleNext}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}

            {!favMovies.includes(movies[sira]) && (
              <button
                className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                onClick={handleAddFav}
              >
                Listeme ekle
              </button>
            )}
            {favMovies.includes(movies[sira]) && (
              <button
                className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                onClick={handleRemove}
              >
                Listemden çıkar
              </button>
            )}
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie
                key={movie.id}
                title={movie.title}
                id={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
