import React from 'react'
import Galeria from './../maincomponents/Galeria.jsx';
import './../../Stylesheets/Inicio.css'
//import GaleriaMovil from '../maincomponents/Galeriamovil.jsx';

export const Inicio = () => {
  return (
    <body>
      <main>
        <div className='quienessomos'><h1>¿Quienes somos?</h1>
        <br></br>
        <p>Somos un equipo interdisciplinario de profesionales expertos en concurso se mérito para el ingreso a la función pública. Brindamos a nuestros clientes servicios profesionales orientados al ingreso efectivo al empleo público calidad a precios competitivos</p>,</div>
        <div className='mision'>
          <h1>Misión: </h1> <p>Nuestra misión es asesorar y capacitar a profesionales interesados en acceder a cargos públicos de acuerdo a su perfil 
              portenciando sus fortalezazs. Guiamos a nuestros clientes durante todas las etapas del proceso para que realicen por sí mismos 
              los trámites  necesarios, reduciendo los costos asociados a los servicios de asesoramiento, capacitación y respaldos jurídicos 
              requeridos, a la vez que aseguramos que estén debidamente asesorados aumentando significativamene sus oportunidades de ingreso.</p>  
        </div>
        <div className='vision'>
          <h1>Visión:</h1>  <p>Nos visualizamos como líderes innovadores en el ámbito del acompañamiento jurídico, así como en la capacitación y asesoría
            especializada a lo largo del proceso de selección e ingreso a la función pública, siendo reconocidos a nivel nacional por un servicio 
            técnico de alta calidad, enfocado a lograr que cada uno de nuestros cliente acceda al mejor empleo público posible de acuerdo a su perfil, por una tarifa justa</p>   
        </div>
        {/* <div>
          {<GaleriaMovil />}
        </div> */}
      </main>
      {/* <div className='bodyinicio'>
          <div>{<Galeria />}</div>
        </div> */}
    </body>
  )

}

export default Inicio
