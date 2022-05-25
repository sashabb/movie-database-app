import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "./Add";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <div className={"section-header"}>
        <h1>Watchlist</h1>
      </div>
      {watchlist && watchlist.length > 0 ? (
        <ul className={"grid"}>
          {watchlist.map((movie: Movie, i: number) => {
            return <MovieCard key={i} movie={movie} type={"watchlist"} />;
          })}
        </ul>
      ) : (
        <div className={"empty"}>
          <div className={"flex"}>
            <h2>No films saved to watchlist.</h2>
            <Link to={"/add"} className={"btn"}>
              Add
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
