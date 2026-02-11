import { useState } from "react";
import "./searchBar.css"

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="recipe-search">
      <div className="searchInputWrapper">
        <img src="search.png" alt="search" className="searchIcon" />
        <input
          type="text"
          className="searchText"
          placeholder="Search by name or ingredient..."
          value={searchTerm}
          onChange={handleInputChange}
        />
     {searchTerm && (
          <button className="clearSearchBtn" onClick={handleClear}>
            ✕
          </button>
        )}
       
      </div>
    </div>
  );
}

export default SearchBar;
