import React, { useState } from "react";
import './../../Stylesheets/Barranavegacion.css';
import { Link, NavLink } from "react-router-dom";
import './../../Stylesheets/Servicios.css';
import logo from './../../assets/image/Logo_SalonDeBelleza.png';

export const Barranavegacion = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div> 
                <nav>
                    <Link to="/#seccioncuarta"><a href=""></a><button>Sección primera </button> </Link>

                    <button>Sección primera </button>
                    <ul className={menuOpen ? "open" : ""} >
                        {/* <li className="padding-item">
                            <Link to="/">INICIO</Link>
                        </li> */}
                        
                        <li >
                            <Link to="/"> 
                                <img src = {logo} alt = 'logo' style={{ maxWidth: '100px', maxHeight: '50px' }} ></img>
                            </Link>
                               
                        </li> 
                       
                        {/* <li >
                            <Link to="/contactenos">AGENDA TU CITA</Link>
                        </li> */}
                    </ul>
                    <Link to="/#seccioncuarta"><button >Sección primera </button> </Link>
                </nav>
                      
            </div>

        </header>

    );
};