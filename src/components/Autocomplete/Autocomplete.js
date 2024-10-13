import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'; 
import SuggestionsList from '../SuggestionsList/SuggestionsList'; 
import AlternativeSuggestionsList from '../AlternativeSuggestionsList/AlternativeSuggestionsList';
import { fetchAutocompleteData } from '../service/fetchAutoCompleteData';
import Header from '../Header/Header';
import './Autocomplete.css';

function Autocomplete() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showAlternativeList, setShowAlternativeList] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);
  
  const fetchSuggestions = async (inputValue) => {
    try {
      const results = await fetchAutocompleteData(inputValue);
      setSuggestions(results);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    setShowAlternativeList(false);
    setEnterPressed(false);

    if (inputValue.length === 0) {
      setSuggestions([]); 
    } else if (inputValue.length > 1) {
      fetchSuggestions(inputValue); 
    } else {
      setSuggestions([]); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEnterPressed(true);
      setShowAlternativeList(true);
    }
  };

  
  const handleBlur = () => {
    setShowAlternativeList(false);
    setSuggestions([]); 
  };

 
  const handleFocus = () => {
    if (input.length > 1) {
      fetchSuggestions(input); 
      setShowAlternativeList(false); 
    }
  };

  return (
    <div className="autocomplete">
      <Header input={input} enterPressed={enterPressed} />
      <SearchBar 
        onSearch={handleInputChange} 
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus} 
        onChange={handleInputChange} 
      />
      {showAlternativeList ? (
        <AlternativeSuggestionsList suggestions={suggestions} input={input} />
      ) : (
        suggestions.length > 0 && <SuggestionsList suggestions={suggestions} input={input} />
      )}
    </div>
  );
}

export default Autocomplete;
