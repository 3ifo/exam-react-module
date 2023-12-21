import React, { useState } from "react";
import "../Index.scss";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        /* Ho notato che l'onkeypress è deprecato e me lo segna in quanto tale, cercando su internet ho visto questo keydown che pare funzionare */
        onKeyDown={handleKey}
        placeholder="Cerca"
      />
      <button onClick={handleSearchClick}>Cerca</button>
    </div>
  );
};

export default SearchBar;
