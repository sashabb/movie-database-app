import { stat } from "fs";
import { createContext, useEffect, useReducer } from "react";
import { Movie } from "../components/Add";
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

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
