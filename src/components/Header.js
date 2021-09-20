import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://i.gyazo.com/59bc8d410979282b14a8f94cb5abef80.png"
          className="header_logo"
          alt=""
        />
      </Link>
      <div className="header_nav">
        <Link className="header_link" to="/login">
          <span>Login</span>
        </Link>
        <Link className="header_link" to="/signup">
          <span>Sign up</span>
        </Link>
        <Link className="header_link" to="/">
          <span>Future Add Potluck Component</span>
        </Link>
        <Link className="header_link" to="/potlucks">
          <span>Putluck List Component</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
