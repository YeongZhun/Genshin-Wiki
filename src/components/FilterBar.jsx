import React from 'react'

function FilterBar({ element, selectedElement, onElementChange}) {
  return (
    <div className="mb-4 ">
      <label className="block mb-2 font-semibold">Filter by Element:</label>
      <select
        className="w-60 px-4 py-2 border rounded-md bg-orange-100/75"
        value={selectedElement}
        onChange={onElementChange}
      >
        <option value="">All Elements</option>
        {element.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar