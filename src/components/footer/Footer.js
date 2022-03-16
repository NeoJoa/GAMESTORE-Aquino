import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Descargue nuestra App</h3>
            <p>Descargue la App para Android y telefono movil.</p>
          </div>
          <div className="footer-col-2">
            <h1> GAMESTORE </h1>
            <p>
              Nuestro proposito es brindarles el mejor servicio en ventas de
              juegos.
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Links Utiles</h3>
            <ul>
              <li>Politicas de devolucion</li>
              <li>Blog Post </li>
              <li>Copunes</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Seguinos:</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter </li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        <hr></hr>
        <p className="copyright">Copyright 2022 - GAMESTORE</p>
      </div>
    </div>
  );
}

export default Footer;
