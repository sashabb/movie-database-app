import { Movie } from "./Add";

const WatchlistCard = ({ movie }: { movie: Movie }) => {
  return (
    <li className={"watchlist-card"}>
      <div className={"watchlist-image-wrapper"}>
        <div className={"aspectholder"}>
          {movie?.poster_path && (
            <img
              src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
              alt={movie.title}
            />
          )}
        </div>
      </div>

      <div className={"movie-details"}>
        <div className={"movie-details-header"}>
          <div>
            <h3>{movie.title.toUpperCase()}</h3>
            {movie.release_date && <p>{movie.release_date.substring(0, 4)}</p>}
          </div>
          <button type="button">Remove</button>
        </div>
        <div className={"rating"}>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </li>
  );
};

export default WatchlistCard;
