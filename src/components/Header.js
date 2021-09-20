import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <h3>HOME LOGO/IMG</h3>
      </Link>
      <div className="header_nav">
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/signup">
          <span>Sign up</span>
        </Link>
        <Link to="/">
          <span>Future Add Potluck Component</span>
        </Link>
        <Link to="/potlucks">
          <span>Putluck List Component</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
