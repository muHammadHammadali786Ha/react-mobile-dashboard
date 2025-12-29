import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ 
  onSearch, 
  onFilterChange, 
  onFindClick,
  destinationPlaceholder = "Search Destination",
  themesPlaceholder = "Select themes",
  buttonText = "Find For me",
  themeOptions = [
    { value: "adventure", label: "Adventure" },
    { value: "beach", label: "Beach" },
    { value: "culture", label: "Culture" },
    { value: "nature", label: "Nature" }
  ]
}) => {
  const [destination, setDestination] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleThemeChange = (e) => {
    const value = e.target.value;
    setSelectedTheme(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  const handleFindClick = () => {
    if (onFindClick) {
      onFindClick({ destination, theme: selectedTheme });
    }
  };

  return (
    <div className="search-filter-container">
      <div className="search-filter-box">
        <input
          type="text"
          className="search-destination-input"
          placeholder={destinationPlaceholder}
          value={destination}
          onChange={handleDestinationChange}
          aria-label="Search destination"
        />
        
        <div className="select-themes-wrapper">
          <select
            className="select-themes-input"
            value={selectedTheme}
            onChange={handleThemeChange}
            aria-label="Select theme"
          >
            <option value="">{themesPlaceholder}</option>
            {themeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <svg
            className="chevron-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        
        <button
          className="find-button"
          onClick={handleFindClick}
          aria-label="Find trips"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

