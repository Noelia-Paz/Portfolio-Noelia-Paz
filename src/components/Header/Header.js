import React from "react";
import "./header.scss";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#main">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#aboutMe">
              Sobre Mi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#works">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#contactMe"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
