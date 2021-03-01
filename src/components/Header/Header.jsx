import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { CgMenuRight as MenuIcon } from "react-icons/cg";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navEl = useRef();

  useEffect(() => {
    const nav = navEl.current;
    if (expanded) nav.classList.add("expanded");
    if (!expanded) nav.classList.remove("expanded");
  });

  return (
    <header className="Header">
      <Link className="Header-AppName" to="/">NeoCraft</Link>

      <div
        className="Header-NavToggle"
        onClick={() => setExpanded((curr) => !curr)}
      >
        <MenuIcon />
      </div>

      <nav ref={navEl} className="Header-Nav">
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="Header-Nav-Item"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="active"
          exact
          to="/about"
          className="Header-Nav-Item"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
