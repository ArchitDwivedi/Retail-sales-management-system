import React from "react";
import { FiHome, FiFileText, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">SMS</h2>
      <nav>
        <a className="active"><FiHome /> Dashboard</a>
        <a><FiFileText /> Invoices</a>
        <a><FiSettings /> Settings</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
