import React from "react";
import "../styles/NavBar.scss";
import { information } from "../service/dataTest";

function NavBar() {

  const handleLogout = () => {
    // Limpiar el session storage y redirigir al inicio de sesión
    sessionStorage.clear();
    window.location.href = "/"; // Reemplaza "/" con la URL de inicio de sesión correspondiente
  };

  return (
    <div>
      {information ? (
        <div>
          <ul className="ul-nv">
            <li className="ul-nv-li">
              <a className="ul-nv-a" href="home">
                Inicio
              </a>
            </li>
            {information.data.hijos.map((navMenu, index) => (
              <li key={index} className="ul-nv-li">
                <a className="ul-nv-a">{navMenu.titulo}</a>
                <ul className="ul-children">
                  {navMenu.hijos.map((innerMenu, index) => (
                    <li key={index} className="ul-children-li">
                      <a className="ul-children-a" href={`${innerMenu.nombre}`}>
                        {innerMenu.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <ul className="ul-nv">
          <li>
            <a>Cargando...</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
