import { createContext, useEffect, useReducer } from "react";
import { Movie } from "../components/parts/Add";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") as any)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") as any)
    : [],
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites") as any)
    : [],
  addToWatchlist: (movie: Movie) => {},
  removeFromWatchlist: (movie: Movie) => {},
  addToWatched: (movie: Movie) => {},
  removeFromWatched: (movie: Movie) => {},
  addToFavourites: (movie: Movie) => {},
  removeFromFavourites: (id: string) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props: any) => {
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

  const removeFromWatchlist = (id: Movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  const addToWatched = (movie: Movie) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: movie });
  };

  const removeFromWatched = (id: Movie) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  const addToFavourites = (movie: Movie) => {
    dispatch({ type: "ADD_TO_FAVOURITES", payload: movie });
    console.log("addToFavourites");
  };

  const removeFromFavourites = (id: string) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: id });
    console.log("removeFromFavourites");
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
