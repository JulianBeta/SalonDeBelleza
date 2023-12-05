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
                    <ul className={menuOpen ? "open" : ""} >
                        <li className="padding-item">
                            <Link to="/">INICIO</Link>
                        </li>
                        <li >
                            <Link to="/servicios">CONÓCEME</Link>
                        </li>
                        <li >
                            <Link to="/servicios">SERVICIOS</Link>
                        </li>
                        <li >
                            <Link to="/"> 
                                <img src = {logo} alt = 'logo' style={{ maxWidth: '100px', maxHeight: '50px' }} ></img>
                            </Link>
                               
                        </li> 
                        <li >
                            <Link to="/tarifas">PRODUCTOS</Link>
                        </li>
                        <li >
                            <Link to="/contactenos">AGENDA TU CITA</Link>
                        </li>
                    </ul>
                </nav>
                      
            </div>

        </header>

    );
};