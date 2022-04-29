import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link className="logo-link" to="/">
          Sinventory
        </Link>
      </div>
      <ul className="navigation">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/manage-inventory">
            Manage Inventory
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="btn btn-sm" to="/signup">
            Signup
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
