import React from 'react'
import Logo from "../assets/img/Discap_Training_logotipo.png";
import "../styles/NavBar.scss";
import { information } from '../service/dataTest';

const NavBar = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={Logo} className="logo-dimension" />
            </td>
            <td className="text-right">
              <div>
                <ul className="text-right-ul">
                  <li>
                    <button className="SignIn">
                    <a>Iniciar Sesión</a>
                    </button>
                    {/* <h6 className="h6-nav">
                      <a>
                        <i>Bienvenido </i>
                        <i>Iniciar Sesión</i>
                      </a>
                    </h6> */}
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
                    <a className="ul-children-a" href={`${innerMenu.titulo}`}>
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
    </>
  )
}

export default NavBar