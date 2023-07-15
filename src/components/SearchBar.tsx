import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(search);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="enter city name"
        security="false"
        value={search}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>
        <img src="img/search.png" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
