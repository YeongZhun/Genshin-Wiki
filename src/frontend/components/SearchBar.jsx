import React from 'react'

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-60 px-4 py-2 border rounded-md bg-orange-100/75 mt-4"
      />
    </div>
  );
}

export default SearchBar