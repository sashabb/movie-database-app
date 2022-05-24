import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "../Add";
import ResultCard from "./ResultCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);

  return (
    <div>
      <div className={"watchlist-header"}>
        <h1>Watchlist</h1>
      </div>

      {watchlist && watchlist.length > 0 && (
        <ul>
          {watchlist.map((movie: Movie, i: number) => {
            return <ResultCard key={i} result={movie} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Watchlist;
