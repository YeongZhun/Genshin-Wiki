import React from 'react'

function SearchBar({ searchTerm, onSearchChange, isDarkMode }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={onSearchChange}
        className={`searchBar w-60 px-4 py-2 border-2 border-orange-200 rounded-md ${isDarkMode ? 'bg-orange-100/80' : 'bg-orange-100'} mt-4`}
      />
    </div>
  );
}

export default SearchBar