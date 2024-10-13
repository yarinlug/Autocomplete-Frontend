// components/AlternativeSuggestionsList.js
import React from 'react';
import './AlternativeSuggestionsList.css';

function AlternativeSuggestionsList({ suggestions, input }) {
    return (
        <div className="alt-suggestions-list">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="alt-suggestion-item">
                    <img className="alt-suggestion-avatar" src={suggestion.imageURL} alt={suggestion.name} />
                    <div className="alt-suggestion-details">
                        <span className="alt-suggestion-name">{suggestion.name}</span>
                        <span className="alt-suggestion-role">{suggestion.workTitle}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AlternativeSuggestionsList;
