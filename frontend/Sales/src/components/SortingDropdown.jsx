// src/components/SortingDropdown.jsx
import React from "react";

const SortingDropdown = ({ sortBy, sortOrder, onChange }) => {
  const handleSortByChange = (e) => {
    onChange({ sortBy: e.target.value, sortOrder });
  };

  const handleSortOrderChange = (e) => {
    onChange({ sortBy, sortOrder: e.target.value });
  };

  return (
    <div className="sorting-container">
      <label className="sorting-label">
        Sort by:
        <select
          className="sorting-select"
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="date">Date (Newest First)</option>
          <option value="quantity">Quantity</option>
          <option value="customerName">Customer Name (A–Z)</option>
        </select>
      </label>

      <label className="sorting-label">
        Order:
        <select
          className="sorting-select"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
      </label>
    </div>
  );
};

export default SortingDropdown;
