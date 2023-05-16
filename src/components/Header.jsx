import React from 'react'
import Logo from "../assets/img/Discap_Training_logotipo.png";
import Slogan from '../assets/img/Discap_Training_slogan.png'
import "../styles/Header.scss";


const Header = () => {
  return (
  <div className='section'>
  <table>
    <tbody>
      <tr>
        <td>
        <section>
          <img src={Slogan} className="logo-dimension" />      
        </section>
        </td>
        <td className="text-right">
          <div>
            <ul className="text-right-ul">
              <li>
                <h1 className="discap-training">DISCAP-TRAINING</h1>
                <h6 className="h6-nav">
                  <a>
                    <i>
                      BIENVENIDO
                    </i>
                    <i>
                      <a href='/login'>Iniciar Sesión</a>
                    </i>
                  </a>
                </h6>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
    
  </div>
    
  )
}

export default Header