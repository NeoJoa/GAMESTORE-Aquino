import React, { useState } from "react";
import "../../App.css";
function Navbar() {
  const [mostrarLinks, setMostrarLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <a href="#">GAMESTORE</a>
      </div>
      <div className="right">
        <div className="links" id={mostrarLinks ? "hidden" : ""}>
          <a href="/home">INICIO</a>
          <a href="/store">TIENDA</a>
          <a href="/contact">CONTACTO</a>
          <a href="#">CARRITO</a>
        </div>
        <button onClick={() => setMostrarLinks(!mostrarLinks)}>Abrir</button>
      </div>
    </div>
  );
}

export default Navbar;
