import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, onKeyDown, onBlur, onFocus, onChange }) {
  const searchIcon = './search-icon.png';

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Type here..."
        onChange={onChange}
        onBlur={onBlur}   
        onFocus={onFocus} 
        onKeyDown={onKeyDown} 
      />
      <button className="search-btn">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
}

export default SearchBar;
