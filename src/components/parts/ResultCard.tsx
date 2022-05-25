import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "./Add";

const ResultCard = ({ result }: { result: Movie }) => {
  const { addToWatchlist, addToWatched, watchlist, watched } =
    useContext(GlobalContext);
  const storedWatchlistMovie = watchlist.find((o: Movie) => o.id === result.id);
  const watchlistDisabled = storedWatchlistMovie ? true : false;
  const storedWatchedMovie = watched.find((o: Movie) => o.id === result.id);
  const watchedDisabled = storedWatchedMovie ? true : false;
  return (
    <li className={"result-card"}>
      <div className={"image-wrapper"}>
        <div className={"aspectholder"}>
          {result?.poster_path && (
            <img
              src={"https://image.tmdb.org/t/p/w200" + result.poster_path}
              alt={result.title}
            />
          )}
        </div>
      </div>

      <div className={"movie-details"}>
        <div className={"movie-details-header"}>
          <div>
            <h3>{result.title}</h3>
            {result.release_date && (
              <p>{result.release_date.substring(0, 4)}</p>
            )}
          </div>
          <div className={"controls"}>
            <button
              type={"button"}
              disabled={watchlistDisabled}
              className={"add-to-list"}
              onClick={() => addToWatchlist(result)}
            >
              + Watchlist
            </button>
            <button
              type={"button"}
              disabled={watchedDisabled}
              className={"add-to-list"}
              onClick={() => addToWatched(result)}
            >
              + Watched
            </button>
          </div>
        </div>
        <div className={"rating"}>
          <p>{result.vote_average}</p>
        </div>
      </div>
    </li>
  );
};

export default ResultCard;
