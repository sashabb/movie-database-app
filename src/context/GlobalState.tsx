import { createContext, useEffect, useReducer } from "react";
import { Movie } from "../components/parts/Add";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") as string)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") as string)
    : [],
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites") as string)
    : [],
  addToWatchlist: (movie: Movie) => {},
  removeFromWatchlist: (id: string) => {},
  addToWatched: (movie: Movie) => {},
  removeFromWatched: (id: string) => {},
  addToFavourites: (movie: Movie) => {},
  removeFromFavourites: (id: string) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

type Props = {
  children?: React.ReactNode;
};
// Provider components
export const GlobalProvider = (props: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);

  // Actions
  const addToWatchlist = (movie: Movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatchlist = (id: string) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  const addToWatched = (movie: Movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  };

  const removeFromWatched = (id: string) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  const addToFavourites = (movie: Movie) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: movie });
  };

  const removeFromFavourites = (id: string) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        favourites: state.favourites,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {props?.children}
    </GlobalContext.Provider>
  );
};
