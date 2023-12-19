import React from 'react'
import Galeria from './../maincomponents/Galeria.jsx';
import './../../Stylesheets/Inicio.css'
//import GaleriaMovil from '../maincomponents/Galeriamovil.jsx';
import { WhatsApp } from '../maincomponents/WhatsApp.jsx';
import flores from './../../assets/image/flores.jpeg'
import peluquera from './../../assets/image/peluquera.jpeg'


export const Inicio = () => {
  return (
    <body>
      <div className='divmarcadeagua'>
        {/* <div>
          <img src={ flores } className='flores'/>
        </div> */}
               
        <div className='fotopeluquera'>
        <img src={peluquera} />
        </div>
        
        <div className='textsectiontop'>
          <h1>GLORIA NORATO</h1>
          <p>Nuestra misión es asesorar y capacitar a profesionales interesados en acceder a cargos públicos de acuerdo a su perfil 
              portenciando sus fortalezazs. Guiamos a nuestros clientes durante todas las etapas del proceso para que realicen por sí mismos 
              los trámites  necesarios, reduciendo los costos asociados a los servicios de asesoramiento, capacitación y respaldos jurídicos 
              requeridos, a la vez que aseg</p>
              <button className='botonwhatsapp'>
        <a href='https://api.whatsapp.com/send/?phone=573006822639'> Envíanos un Whatsapp </a>

        
        </button>
        </div>
        
      </div>
      
    </body>
  )

}

export default Inicio
