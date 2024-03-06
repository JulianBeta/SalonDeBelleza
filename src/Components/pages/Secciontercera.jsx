import React from 'react';
import {Slideshow, Slide, TextoSlide} from './../maincomponents/Galeria.jsx'
import './../../Stylesheets/Slider.css';
import styled from 'styled-components';
import img1 from './../../assets/image/1.jpg';
import img2 from './../../assets/image/2.jpg';
import img3 from './../../assets/image/3.jpg';
import img4 from './../../assets/image/4.jpg';
import Maincarrusel from './../carruselcomponents/maincarrusel.jsx'

import img6 from './../../assets/image/peluquera.jpeg';


export const Secciontercera= () => {
	return (
		<div className='secciontercera'> 
		<div className='textotercero'>Texto</div>
		<div className='carruseltercero'><Maincarrusel/> </div>
</div>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Secciontercera;

       
