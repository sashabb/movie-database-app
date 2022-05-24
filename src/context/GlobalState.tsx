import { createContext, useReducer } from "react";
import { Movie } from "../components/Add";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  watchlist: [],
  watched: [],
  addToWatchlist: (movie: Movie) => {},
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
