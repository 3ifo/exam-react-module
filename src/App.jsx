import SearchPage from "./components/SearchPage";

import "./Index.css";
/* Ho cercato di dare un minimo di stile con sass anche se non ho dedicato molto tempo alla parte dello style, ora non fa schifo fa schifino. */
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import PersonPage from "./components/PersonPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
      </Routes>
    </div>
  );
}

export default App;
