import React from "react";

const FiltersRow = ({ queryState, setQueryState }) => {
  const handleChange = (key, value) => {
    setQueryState({
      ...queryState,
      filters: { ...queryState.filters, [key]: value },
      page: 1, // Reset pagination on filter change
    });
  };

  return (
    <div className="filters-row">
      <select
        value={queryState.filters.region || ""}
        onChange={(e) => handleChange("region", e.target.value)}
      >
        <option value="">Region</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>

      <select
        value={queryState.filters.gender || ""}
        onChange={(e) => handleChange("gender", e.target.value)}
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <select
        value={queryState.filters.productCategory || ""}
        onChange={(e) => handleChange("productCategory", e.target.value)}
      >
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Grocery">Grocery</option>
        <option value="Home">Home</option>
      </select>

      <select
        value={queryState.filters.paymentMethod || ""}
        onChange={(e) => handleChange("paymentMethod", e.target.value)}
      >
        <option value="">Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
      </select>
    </div>
  );
};

export default FiltersRow;
