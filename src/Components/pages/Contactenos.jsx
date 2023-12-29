import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './../../Stylesheets/Contactenos.css'

export const Contactenos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0oh4zgj', 'template_s0o6dm6', form.current, 'iebIbX0OaCJ_r6ft6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <body>
      <div>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Ingrese su nombre y apellido" name="user_name" />
        </div>
        <div>
          <label>Teléfono</label>
          <input type="number" placeholder="Ingrese su número de contacto" name="user_phone" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Ingrese su dirección de correo electrónico" name="user_email" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea name="message" placeholder="Ingrese su mensaje" />
          <input type="submit" value="Send" />
        </div>
      </form>
      </div>
      
    </body>
  );
};

