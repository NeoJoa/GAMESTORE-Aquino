import React, { useState, useContext } from "react";
import CartWidget from "../../icon/CartWidget.js";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext.js";
import "../../App.css";

function Navbar() {
  const { items } = useContext(CartContext);
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
        </div>
        <NavLink to="/cart">
          <i className="icon-group">
            <CartWidget />
            {items.length === 0 ? "" : <p className="badge">{items.length}</p>}
          </i>
        </NavLink>
        <button onClick={() => setMostrarLinks(!mostrarLinks)}>Abrir</button>
      </div>
    </div>
  );
}
export default Navbar;
