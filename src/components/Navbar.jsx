import React from "react";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <img src={logo} className="nav__logo" alt="React logo" />
        <span className="nav__title">React</span>
      </div>
      <nav className="nav__links">
        <a href="#features">Features</a>
        <a href="#docs">Docs</a>
        <a href="#community">Community</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
}
