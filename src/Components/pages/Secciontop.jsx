import React from 'react'
import './../../Stylesheets/secciontop.css'
import peluquera from './../../assets/image/peluquera.jpeg'


export const Secciontop = () => {
    return (
        <body>
            <div className='secciontopcontendor'>
                <div className='fotopeluquera'>
                    <img src={peluquera} />
                </div>
                <div className='seccionderecha'>
                    <div className='textsectiontop'>
                        <h1>GLORIA NORATO</h1>
                        <p>Nuestra misión es asesorar y capacitar a profesionales interesados en acceder a cargos públicos de acuerdo a su perfil
                        portenciando sus fortalezazs. Guiamos a nuestros clientes durante todas las etapas del proceso para que realicen por sí mismos
                        los trámites  necesarios, reduciendo los costos asociados a los servicios de asesoramiento, capacitación y respaldos jurídicos
                        requeridos, a la vez que aseg</p>
                    </div>
                    <div className='botonwhatsapp'>
                        <button >
                            <a href='https://api.whatsapp.com/send/?phone=573006822639'> Envíanos un Whatsapp </a>
                        </button>
                    </div>
                </div>
            </div>
        </body>

    )
}
