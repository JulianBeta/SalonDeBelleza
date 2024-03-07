import React from 'react'
import './../../Stylesheets/Inicio.css'
import { WhatsApp } from '../maincomponents/WhatsApp.jsx';
import { Seccioncontactenos } from './Seccioncontactenos.jsx';
import { Secciontop } from './Secciontop.jsx';
import { SeccionSlider } from './SeccionSlider.jsx';
import { Secciontercera } from './Secciontercera.jsx';



export const Inicio = () => {
  return (
    <div>

        <div><Secciontop/></div> 
        <div><SeccionSlider/></div>
        <div><Secciontercera/></div>
        <div><Seccioncontactenos/></div>
      
    </div>
  )

}

export default Inicio
