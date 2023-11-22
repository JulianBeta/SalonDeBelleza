import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import './../../../Stylesheets/Servicios.css'
import emailjs from '@emailjs/browser';

export const AsesoriaEmpleo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_menm9fk', 'template_52cfn2v', form.current, 'iebIbX0OaCJ_r6ft6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div>

      <h3 className='tituloservicios'>ASESORÍA ESPECIALIZADA <br></br>
        Nuestro equipo le brindará asesoría especializada
        para la selección del empleo público para el que
        tenga mayores opciones y que mejor se adapte a su
        perfil profesional y aspiración salarial
      </h3>
      
      <div className='freeasoria'>
        <div ><h4>
          Servicio gratuito
        </h4>
        </div> <p>Ingrese sus datos en el siguiente formulario
          y, de forma completamente gratuita y sin suscripción,
          recibirá por correo electrónico el nivel y grados de
          los empleos (sin indicar OPEC) que mejor se ajustan a su perfil.</p>
        <div className='formulario'>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label>Nombre</label>
              <input type="text" placeholder="Ingrese su nombre y/o apellido" name="user_name" />
            </div>
            <div>
              <label>Nivel al que aspira</label>
              <input type="text" placeholder="Asistencial/Técnico/Profesional/Asesor" name="user_nivel" />
            </div>
            <div>
              <label>Experiencia laboral</label>
              <input type="number" placeholder="Ingrese el número de meses
               de experiencia en el nivel de empleo al que desea ingresar" name="user_meses" />
            </div>
            <div>
              <label>Experiencia académica</label>
              <input type="text" placeholder="Señale brevemente 
              su experiencia académica" name="user_academica" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Ingresa tu correo electrónico" name="user_email" />
            </div>
            <div>
              <label>Información complementaria</label>
              <textarea name="message" placeholder="Ingrese cualquier información que considere relevante para la consulta realizada" />
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      
      </div>
      <div className='premiumasoria'>
        <div><h4>
          Servicio premium
        </h4>
        </div> <p>Con nuestro servicio premium usted recibirá asesoría personalizada, a través de la cual 
          le informaremos los cargos específicos que mejor se ajusten a su experiencia laboral con indicación del puntaje apróximado que optendría en la valoración de antecedentes.</p>
          <p>Servicio garangtizado: En caso de que no sea admitido en la verificación de requisitos mínimos, 
            nuestro equipo le brindará toda la asesoría necesaria para la respectiva reclamación.</p>
            <Link className='colorlink' to="/tarifas">Tarifa asesoría premium</Link> 
      </div>


    </div>




  )
}
