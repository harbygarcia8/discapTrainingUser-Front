import React from 'react'
import Logo from "../assets/img/Discap_Training_logotipo.png";
import Slogan from '../assets/img/Discap_Training_slogan.png'
import "../styles/Header.scss";


const Header = () => {
  return (
    <section className='section'>
    <img src={Slogan} className="logo-dimension" />      
    </section>
  )
}

export default Header