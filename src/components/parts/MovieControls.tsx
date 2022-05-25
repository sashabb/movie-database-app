import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "./Add";

export const MovieControls = ({
  movie,
  type,
}: {
  movie: any;
  type: string;
}) => {
  const {
    watchlist,
    watched,
    addToWatchlist,
    removeFromWatchlist,
    addToWatched,
    removeFromWatched,
  } = useContext(GlobalContext);
  const storedWatchlistMovie = watchlist.find((o: Movie) => o.id === movie?.id);
  const watchlistDisabled = storedWatchlistMovie ? true : false;
  const storedWatchedMovie = watched.find((o: Movie) => o.id === movie?.id);
  const watchedDisabled = storedWatchedMovie ? true : false;
  return (
    <div className={"action-buttons"}>
      {type === "watchlist" && (
        <>
          <button
            type="button"
            className={"btn add-to-list"}
            disabled={watchedDisabled}
            onClick={() => addToWatched(movie)}
          >
            Watched
          </button>
          <button
            type="button"
            className={"btn"}
            onClick={() => removeFromWatchlist(movie?.id)}
          >
            Remove
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            type="button"
            className={"btn add-to-list"}
            disabled={watchlistDisabled}
            onClick={() => addToWatchlist(movie)}
          >
            Watchlist
          </button>
          <button
            type="button"
            className={"btn"}
            onClick={() => removeFromWatched(movie?.id)}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};
