import React from 'react';
//import temis2 from './../../imagenes/temis2.jpg';
//import temis from './../../imagenes/temis.jpg';
//import imagenbogota from './../../imagenes/imagenbogota.jpg';
import imagenbogota from './../../assets/image/imagenbogota.jpg'
import temis2 from './../../assets/image/temis2.jpg'
import escritorio from './../../assets/image/escritorio.jpg'
import imagenoficina from './../../assets/image/imagenoficina.jpg'


export const Galeria = () => {
  return (
    <main>
      <div>
        <a href='http://localhost:5173/servicios'>
          <img src={temis2} alt='imagen servicios' />
        </a>
        <a href='http://localhost:5173/concursos'>
          <img src={imagenbogota} alt='imagen ciudad' />
        </a>
        <a href='http://localhost:5173/material'>
          <img src={escritorio} alt='imagen temis2' />
        </a>
        <a href='http://localhost:5173/asesoria'>
          <img src={imagenoficina} alt='imagen oficina' />
        </a>

      </div>

      {/* <div><Logoreact/></div> */}

      {/* <div> 
        <button>
          <Leftarrow/>
        </button>        
      </div> */}



    </main>
  )
}

export default Galeria