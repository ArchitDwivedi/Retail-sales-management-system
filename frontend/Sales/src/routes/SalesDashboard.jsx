import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/TopBar";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import useSalesData from "../hooks/useSalesData";

const SalesDashboard = () => {
  const [queryState, setQueryState] = useState({
    search: "",
    filters: {},
    sortBy: "date",
    sortOrder: "desc",
    page: 1,
    pageSize: 10,
  });

  const { rows, meta, loading, error } = useSalesData(queryState);

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <TopBar queryState={queryState} setQueryState={setQueryState} />

        <div className="table-section">
          {loading && <Loader />}
          {!loading && error && <EmptyState message={error} />}
          {!loading && !error && rows.length === 0 && (
            <EmptyState message="No results" />
          )}

          {!loading && rows.length > 0 && (
            <>
              <SalesTable rows={rows} />
              <Pagination
                page={meta.page}
                totalPages={meta.totalPages}
                onChange={(page) => setQueryState({ ...queryState, page })}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
