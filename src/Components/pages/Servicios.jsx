import React from 'react'
import { Link } from 'react-router-dom'
import './../../Stylesheets/Servicios.css'
import GaleriaMovil from '../maincomponents/Galeriamovil.jsx';
import './../../Stylesheets/Inicio.css'
import Galeria from '../maincomponents/Galeria.jsx';
import imagenbogota from './../../assets/image/imagenbogota.jpg'
import temis2 from './../../assets/image/temis2.jpg'
import imagencursos from './../../assets/image/imagencursos.jpg'

export const Servicios = () => {
  return (
    <body>
      {/* <div>
          {<GaleriaMovil />}
        </div> */}
<h1 className='tituloservicios'>SERVICIOS</h1>
                 
      <div className='contenedorserv'> 
      
        <div className='contenedorservicios'>
        <h2>
        <Link to="/asesoria"><img src={imagenbogota} alt="asesoría" /></Link> 
        <br></br>
        
        Asesoría especializada<Link to="/asesoria"></Link>
        </h2>
        </div>
        <div className='contenedorservicios'>
        <h2>
        <Link to="/cursoycapacitacion"><img src={imagencursos} alt="cursos"/></Link> 
        <br></br>
        Cursos y capacitaciones 
        </h2>
        </div>
        <div className='contenedorservicios'>
        <h2 >
        <Link to="/serviciosjuridicos"><img src={temis2} alt="servicios" /></Link> 
        <br></br>
        Servicios jurídicos         </h2>
        </div>
      
      </div>
   </body>

  )
}

export default Servicios

