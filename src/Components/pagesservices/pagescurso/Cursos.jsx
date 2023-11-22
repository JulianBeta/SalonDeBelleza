import React from 'react'
import './../../../Stylesheets/Servicios.css'
import { Link } from 'react-router-dom'

export const Cursos = () => {
  return (
    <div>
      <div><h3 className='tituloservicios'>CURSOS Y CAPACITACIONES<br></br>
    A través de nuestros cursos usted dispondrá de 
  </h3></div>
  <div>
  <h1><Link to="/cursoasistencial">Curso empleos nivel asisitencial</Link></h1>
  </div>
  <div>
  <h1><Link to="/cursotecnico">Curso empleos nivel técnico</Link></h1>
  </div>
  <div>
  <h1><Link to="/cursoprofesional">Curso empleos nivel profesional</Link></h1>
  </div>
       </div>
    
  )
}
