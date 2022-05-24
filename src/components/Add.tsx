import { useState } from "react";
import ResultCard from "./parts/ResultCard";

export type Movie = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
};

const Add = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Movie[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);

    // Fetch request
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-UK&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.error ? [] : data.results);
      });
  };

  return (
    <div>
      <div className="action-bar">
        <input
          className={"search-input"}
          type={"text"}
          placeholder={"Search movie"}
          value={query}
          onChange={onChange}
          autoFocus
        />
      </div>
      {results && results.length > 0 && (
        <ul className={"results-wrapper"}>
          {results
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((result: Movie, i: number) => {
              return <ResultCard key={i} result={result} />;
            })}
        </ul>
      )}
    </div>
  );
};

export default Add;
