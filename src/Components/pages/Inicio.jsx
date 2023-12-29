import React from 'react'

import './../../Stylesheets/Inicio.css'
//import GaleriaMovil from '../maincomponents/Galeriamovil.jsx';
import { WhatsApp } from '../maincomponents/WhatsApp.jsx';
import flores from './../../assets/image/flores.jpeg'
import peluquera from './../../assets/image/peluquera.jpeg'
import { Seccioncontactenos } from './Seccioncontactenos.jsx';
//import {Slider} from './../maincomponents/Slider.jsx'
import { Secciontop } from './Secciontop.jsx';
import { SeccionSlider } from './SeccionSlider.jsx';

export const Inicio = () => {
  return (
    <body>

      <div><Secciontop/></div>
             
        <div><SeccionSlider/></div>
        
        <div><Seccioncontactenos/></div>
        
        
      

      
    </body>
  )

}

export default Inicio
