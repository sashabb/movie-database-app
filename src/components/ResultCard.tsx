import { Movie } from "./Add";

const ResultCard = ({ result }: { result: Movie }) => {
  return (
    <div className={"result-card"}>
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
        <h3>{result.title}</h3>
        <div className={"rating"}>
          <p>{result.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
