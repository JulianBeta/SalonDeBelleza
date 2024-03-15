
import './../../Stylesheets/Inicio.css'
import { WhatsApp } from '../maincomponents/WhatsApp.jsx';
import { Seccioncontactenos } from './Seccioncontactenos.jsx';
import { Secciontop } from './Secciontop.jsx';
import { SeccionSlider } from './SeccionSlider.jsx';
import { Secciontercera } from './Secciontercera.jsx';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import logo from './../../assets/image/Logo_SalonDeBelleza.png';




export const Inicio = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <div>
      <header>
        <div>
          <nav>
            <a className='botonnavbar' href="#seccionprimera"> CONÓCEME  </a>
            <a className='botonnavbar'href="#seccionsegunda"> SERVICIOS </a>
            
            <ul className={menuOpen ? "open" : ""} >

              <li >
                <Link to="/">
                  <img src={logo} alt='logo' style={{ maxWidth: '100px', maxHeight: '50px' }} ></img>
                </Link>

              </li>
            </ul>
            <a className='botonnavbar' href="#secciontercera"> PRODUCTOS </a>
            <a className='botonnavbar' href="#seccioncuarta"> CONTACTO </a>
          </nav>

        </div>

      </header>
      <div id='seccionprimera'><Secciontop /></div>
      <div id='seccionsegunda'><SeccionSlider /></div>
      <div id='secciontercera'><Secciontercera /></div>
      <div id='seccioncuarta'><Seccioncontactenos /></div>

    </div>
  )

}

export default Inicio
