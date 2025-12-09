const Pagination = ({ page, totalPages, onChange }) => (
  <div className="pagination-container">
    <button disabled={page === 1} onClick={() => onChange(page - 1)}>Prev</button>
    <span>Page {page} of {totalPages}</span>
    <button disabled={page === totalPages} onClick={() => onChange(page + 1)}>Next</button>
  </div>
);

export default Pagination;
