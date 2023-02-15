import { removeFav } from "./../actions/favActions";
import { useDispatch } from "react-redux";
import { addMovie } from "./../actions/movieActions";

export default function FavMovie({ title, id, movie }) {
  const dispatch = useDispatch();
  const handleRemove = (id, movie) => {
    dispatch(removeFav(id));
    dispatch(addMovie(movie));
  };
  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{title}</div>
      <button
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
        onClick={() => handleRemove(id, movie)}
      >
        Çıkar
      </button>
    </div>
  );
}
