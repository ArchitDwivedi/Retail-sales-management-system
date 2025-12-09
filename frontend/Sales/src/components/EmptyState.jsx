// src/components/EmptyState.jsx
import React from "react";

const EmptyState = ({ message }) => {
  return (
    <div className="empty-state">
      <p>{message || "No data found."}</p>
    </div>
  );
};

export default EmptyState;
