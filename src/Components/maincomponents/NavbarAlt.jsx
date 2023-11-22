import React from 'react'
import { Link } from 'react-router-dom'
import './../../Stylesheets/Navbar.css'


export const NavbarAlt = () => {
  return (
    <header>
    <div className='navbarfijo'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">COPEP</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to ="/servicios">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/asesoria">Asesoría especializada</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/material">Material de estudio</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/Concursos">Concursos en desarrollo</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/equipo">Nuestro Equipo</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/tarifas">Tarifas</Link>
              </li>
             <li className="nav-item">
                <Link className="nav-link" to="/contactenos">Contáctenos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='boxsigla'>
        <p></p>
        <h1>COPEP</h1>
        <p>COLECTIVO PARA LA PROMOCIÓN DEL EMPLEO PÚBLICO</p>
        <p></p>
      </div>
    </div>
    </header>
  )
}

export default NavbarAlt
