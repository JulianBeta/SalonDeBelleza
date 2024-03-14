
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
                  <a href="#seccioncuarta"> <button>Sección primera </button>  </a>

                    <button>Sección primera </button>
                    <ul className={menuOpen ? "open" : ""} >
                                          
                        <li >
                            <Link to="/"> 
                                <img src = {logo} alt = 'logo' style={{ maxWidth: '100px', maxHeight: '50px' }} ></img>
                            </Link>
                               
                        </li> 
                                                            </ul>
                    <Link to="/#seccioncuarta"><button >Sección primera </button> </Link>
                </nav>
                      
            </div>

        </header>
        <div ><Secciontop id='#seccionprimera'/></div> 
        <div id='#seccionsegunda'><SeccionSlider/></div>
        <div id='#secciontercera'><Secciontercera/></div>
        <div ><Seccioncontactenos id='#seccioncuarta'/></div>
      
    </div>
  )

}

export default Inicio
