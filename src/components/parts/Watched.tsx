import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Movie } from "./Add";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className={"section-header"}>
        <h1>Watched</h1>
      </div>
      {watched && watched.length > 0 ? (
        <ul className={"grid"}>
          {watched.map((movie: Movie, i: number) => {
            return <MovieCard key={i} movie={movie} type={"watched"} />;
          })}
        </ul>
      ) : (
        <div className={"empty"}>
          <div className={"flex"}>
            <h2>No films watched.</h2>
            <Link to={"/add"} className={"btn"}>
              Add
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Watched;
