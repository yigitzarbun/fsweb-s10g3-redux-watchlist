import { Switch, Route, NavLink, Link } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addFav, loadInitialFavs, removeAllFavs } from "./actions/favActions";
import {
  nextPlace,
  prevPlace,
  firstPlace,
  removeMovie,
  loadInitialMovies,
  addAllMovies,
} from "./actions/movieActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialFavs());
    dispatch(loadInitialMovies());
  }, []);
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
    toast("Favorielere eklendi!");
  };

  const handleRemoveFavs = () => {
    dispatch(removeAllFavs());
    dispatch(addAllMovies());
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          className="py-3 px-6 flex gap-x-5 items-center"
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
          {Array.isArray(favMovies) && (
            <p className="text-gray-50 text-sm bg-sky-600 py-1 px-2 rounded-full">
              {favMovies.length}
            </p>
          )}
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            {Array.isArray(movies) && movies.length === 0 && (
              <div className="flex flex-col gap-3 justify-end py-3">
                <p className="text-center">
                  Görüntülenecek film bulunmamaktadır. Favoriler listesinden
                  filmleri çıkararak bu sayfaya gelmelerini sağlayabilirsin.
                </p>

                <Link
                  to="/listem"
                  className="py-3 px-6 bg-black shadow-sm text-white my-8 w-52 text-center mx-auto"
                >
                  Favoriler
                </Link>
              </div>
            )}
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

            {Array.isArray(movies) && sira < movies.length - 1 && (
              <button
                onClick={handleNext}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Sıradaki
              </button>
            )}

            {Array.isArray(favMovies) &&
              movies.length > 0 &&
              !favMovies.includes(movies[sira]) && (
                <button
                  className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
                  onClick={handleAddFav}
                >
                  Listeme ekle
                </button>
              )}
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {Array.isArray(favMovies) && favMovies.length === 0 && (
              <div className="flex flex-col gap-3 justify-end py-3">
                <p className="text-center">
                  Görüntülenecek favori film bulunmamaktadır. Filmler
                  listesinden favorilere ekleme yaparak bu sayfaya gelmelerini
                  sağlayabilirsin.
                </p>

                <Link
                  to="/"
                  className="py-3 px-6 bg-black shadow-sm text-white my-8 w-52 text-center mx-auto"
                >
                  Fimler Listesi
                </Link>
              </div>
            )}
            {Array.isArray(favMovies) &&
              favMovies.map((movie) => (
                <FavMovie
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  movie={movie}
                />
              ))}
          </div>
          <button
            onClick={handleRemoveFavs}
            hidden={favMovies.length === 0}
            className="underline"
          >
            Favorileri Temizle
          </button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
