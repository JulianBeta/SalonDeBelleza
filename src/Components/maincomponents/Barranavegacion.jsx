import React, { useState } from "react";

import './../../Stylesheets/Barranavegacion.css';
import { Link, NavLink } from "react-router-dom";
import './../../Stylesheets/Servicios.css'

export const Barranavegacion = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <br></br>
            <h1 className="nombrecompleto"><Link className="colorlink" to="/">ASOCIACIÓN PARA LA PROMOCIÓN DEL EMPLEO PÚBLICO</Link></h1>
            
            <div> 
            <nav>
                <Link className="navbar-brand" to="/"><h1>APEP Colombia</h1>
             
                        </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li >
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li >
                        <Link to="/material">Material de estudio</Link>
                    </li>
                     <li>
                        <Link to="/Concursos">Concursos en desarrollo</Link>
                    </li>
                    <li >
                        <Link to="/equipo">Nuestro Equipo</Link>
                    </li>
                    <li >
                        <Link to="/tarifas">Tarifas</Link>
                    </li>
                    <li >
                        <Link to="/contactenos">Contáctenos</Link>
                    </li>
                                    </ul>
            </nav>
           {/* <p className="nombrecompleto">COLECTIVO PARA LA PROMOCIÓN DEL EMPLEO PÚBLICO</p> */}
                      
        </div>
        
        </header>

    );
};