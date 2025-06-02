import React from "react";
import "./Navbar.css";

const Navbar = ({ onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">Xeno CRM</div>
      <ul className="nav-links">
        <li>Campaigns</li>
        <li>Create Segment</li>
        <li>Data Upload</li>
        <li>Insights</li>
      </ul>
      <div className="toggle-theme">
        <button onClick={() => onToggleTheme?.()}>
          🌙 / ☀
        </button>
      </div>
    </nav>
  );
};

export default Navbar;