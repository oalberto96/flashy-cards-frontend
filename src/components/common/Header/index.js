/**
 *
 * Header
 *
 */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <nav className="navbar nav">
      <Link
        to="/dashboard"
        className="navbar-brand logo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   "
      >
        Flashy Cards
      </Link>
    </nav>
  );
};

export default Header;
