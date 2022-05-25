import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "./Add";
import WatchlistCard from "./WatchlistCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);

  return (
    <div>
      <div className={"watchlist-header"}>
        <h1>Watchlist</h1>
      </div>

      {watchlist && watchlist.length > 0 && (
        <ul className={"grid"}>
          {watchlist.map((movie: Movie, i: number) => {
            return <WatchlistCard key={i} movie={movie} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
