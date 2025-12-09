import React from "react";
import SearchBar from "./SearchBar";
import SortingDropdown from "./SortingDropdown";
import StatsCard from "./StatsCard";
import FiltersRow from "./FiltersRow";
import useSalesStats from "../hooks/useSalesStats";

const TopBar = ({ queryState, setQueryState }) => {
  const { totalUnits, totalAmount, totalDiscount } = useSalesStats();

  return (
    <div className="topbar-container">
      <div className="search-sort-row">
        <SearchBar
          value={queryState.search}
          onChange={(v) => setQueryState({ ...queryState, search: v, page: 1 })}
        />

        <SortingDropdown
          sortBy={queryState.sortBy}
          sortOrder={queryState.sortOrder}
          onChange={(v) => setQueryState({ ...queryState, ...v })}
        />
      </div>

      <FiltersRow queryState={queryState} setQueryState={setQueryState} />

      <div className="stats-row">
        <StatsCard label="Total Units Sold" value={totalUnits} />
        <StatsCard label="Total Amount" value={`₹${totalAmount}`} />
        <StatsCard label="Total Discount" value={`₹${totalDiscount}`} />
      </div>
    </div>
  );
};

export default TopBar;
