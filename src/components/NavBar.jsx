import React from 'react'
import "../styles/NavBar.scss";
import { information } from '../service/dataTest';

function NavBar() {
  return (
    <div>
        {information ? (
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
      ) : (
        <ul className="ul-nv">
          <li>
            <a>Cargando...</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default NavBar