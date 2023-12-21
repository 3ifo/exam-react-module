import { useState } from "react";
import PersonCard from "./PersonCard";
import SearchBar from "./SearchBar";
import "../Index.scss";
const apiKey = import.meta.env.VITE_API_KEY;

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (searchValue) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${searchValue}`
      );
      const result = await response.json();

      if (result.results.length === 0) {
        setError("Nessun risultato.");
      } else {
        setSearchResults(result.results);
      }

      console.log(result);
    } catch (error) {
      setError("Nessun personaggio trovato");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Search People</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <div className="nopg">{error}</div>}
      {!error && searchResults.length !== 0 && (
        <>
          {searchResults.map((p, index) => (
            <div className="search-person" key={index}>
              <PersonCard
                id={p.id}
                imagePath={p.profile_path}
                name={p.name}
                occupation={p.known_for_department}
                popularity={p.popularity}
                sex={p.gender}
                works={p.known_for}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default SearchPage;
