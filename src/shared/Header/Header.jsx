import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
        {!user && (
          <li>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}
        {user ? (
          <li>
            <Link className="btn btn-sm" to="/login" onClick={handleSignOut}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link className="btn btn-sm" to="/signup">
              Signup
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
