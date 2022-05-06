import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const handleSignOut = () => {
    signOut(auth);
  };
  // navbarClasses.join(" ")
  return (
    <header
      className={`${pathname === "/" ? navbarClasses.join(" ") : ""} header ${
        open ? "open" : ""
      }`}
    >
      <div className="logo">
        <Link className="logo-link" to="/">
          Sports Zone
        </Link>
      </div>
      <ul className="navigation">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {user && (
          <li>
            <Link className="nav-link" to="/manage-inventory">
              Manage Inventory
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link className="nav-link" to="/my-items">
              My Items
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link className="nav-link" to="/add-item">
              Add item
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
        {user ? (
          <li className="nav-btn">
            <Link className="btn btn-sm" to="/login" onClick={handleSignOut}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="nav-btn">
            <Link className="btn btn-sm" to="/signup">
              Signup
            </Link>
          </li>
        )}
      </ul>
      <button className="hamburger-btn" onClick={() => setOpen(!open)}>
        {open ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
    </header>
  );
};

export default Header;
