import { Movie } from "../components/parts/Add";

export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      }
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie: Movie) => movie.id !== action.payload)
      }
    case "ADD_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie: Movie) => movie.id !== action.payload.id),
        watched: [action.payload, ...state.watched]
      }
    case "REMOVE_FROM_WATCHED":
    return {
      ...state,
      watched: state.watchlist.filter((movie: Movie) => movie.id !== action.payload)
    }
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      }
    case "REMOVE_FROM_FAVOURITES":
    return {
      ...state,
      favourites: state.favourites.filter((movie: Movie) => movie.id !== action.payload)
    }
    default:
    return state;
  }
};