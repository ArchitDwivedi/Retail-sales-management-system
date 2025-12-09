const SearchBar = ({ value, onChange }) => (
  <input
    className="search-input"
    placeholder="Search by customer or phone..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
