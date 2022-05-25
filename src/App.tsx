import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Add from "./components/parts/Add";
import Header from "./components/site/Header";
import Watched from "./components/parts/Watched";
import Watchlist from "./components/parts/Watchlist";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
