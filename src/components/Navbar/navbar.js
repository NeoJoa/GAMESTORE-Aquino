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
      <div className="logo">
        <a>
          <Link to="/">GAMESTORE</Link>
        </a>
      </div>
      <nav>
        <ul id={mostrarLinks ? "hidden" : ""}>
          <li>
            <a>
              <NavLink to="/category/ps4">JUEGOS PS4</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/category/ps5">JUEGOS PS5</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/category/consola">CONSOLAS</NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to="/cart">
                <i className="icon-group">
                  <CartWidget />
                  {items.length === 0 ? (
                    ""
                  ) : (
                    <p className="badge">{items.length}</p>
                  )}
                </i>
              </NavLink>
            </a>
          </li>
        </ul>
        <button onClick={() => setMostrarLinks(!mostrarLinks)}>Abrir</button>
      </nav>
    </div>
  );
}
export default Navbar;
