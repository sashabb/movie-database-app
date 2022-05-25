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
  addToWatchlist: (movie: Movie) => {},
  removeFromWatchlist: (movie: Movie) => {},
  addToWatched: (movie: Movie) => {},
  removeFromWatched: (movie: Movie) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
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

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
      }}
    >
      {props?.children}
    </GlobalContext.Provider>
  );
};
