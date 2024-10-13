import React from 'react';
import './Header.css';

function Header({ input, enterPressed }) {
  const hasInput = input?.length > 1; 

  return (
    <header className="header">
      <div className="logo">
        <img src="deloitte-logo.png" alt="Deloitte Logo" />
      </div>
      <div className="headlines-container">
        {enterPressed ? (
          <h1 className="search-results">Search Results</h1>
        ) : (
          <>
            <h1>LOOKING FOR AN EMPLOYEE?</h1>
            <h2>Click on the search bar to learn our suggestions</h2>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
