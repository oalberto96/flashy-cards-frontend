/**
 *
 * Header
 *
 */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ isAuthenticated, username, onLogoutClick }) => {
  return (
    <nav className="navbar nav">
      <Link
        to="/dashboard"
        className="navbar-brand logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
      >
        Flashy Cards
      </Link>
      {isAuthenticated && (
        <div className="user">
          {username} |{" "}
          {
            <span className="logout" onClick={onLogoutClick}>
              logout
            </span>
          }
        </div>
      )}
    </nav>
  );
};

export default Header;
