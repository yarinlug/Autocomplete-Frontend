import React from 'react';
import './SuggestionsList.css';

function SuggestionsList({ suggestions, input }) {
  
  const highlightText = (text) => {
    if (!input) return text;

    const regex = new RegExp(`(${input})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === input.toLowerCase() ? (
        <span key={index} style={{ fontWeight: 'bold', color: 'darkorange' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion-item">
          <img src={suggestion.imageURL} alt={suggestion.name} />
          <div className="suggestion-details">
            <p className="suggestion-role">{highlightText(suggestion.workTitle)}</p>
            <p className="suggestion-name">{highlightText(suggestion.name)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestionsList;
