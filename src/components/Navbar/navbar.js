import React, { useState } from "react";
import CartWidget from "../../icon/CartWidget.js";
import { Link, NavLink } from "react-router-dom";

import "../../App.css";
function Navbar() {
  const [mostrarLinks, setMostrarLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">GAMESTORE</Link>
      </div>
      <div className="right">
        <div className="links" id={mostrarLinks ? "hidden" : ""}>
          <NavLink to="/category/ps4">JUEGOS PS4</NavLink>
          <NavLink to="/category/ps5">JUEGOS PS5</NavLink>
          <NavLink to="/cart">
            <i>
              <CartWidget />
            </i>
          </NavLink>
        </div>
        <button onClick={() => setMostrarLinks(!mostrarLinks)}>Abrir</button>
      </div>
    </div>
  );
}
export default Navbar;
