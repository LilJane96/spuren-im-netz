import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Searchfield.css";

const SearchBar = () => {


  return (
    <div className="SearchbarContainer">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <div>
        <p className="search-text">Felix</p>
      </div>
    </div>
  );
};

export default SearchBar;
