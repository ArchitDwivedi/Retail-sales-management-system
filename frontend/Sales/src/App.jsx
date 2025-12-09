import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SalesDashboard from "./routes/SalesDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SalesDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
