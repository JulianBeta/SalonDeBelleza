import React, { useState } from 'react';
import './../../Stylesheets/Secciontercera.css';
import ImageCarousel from './imagecarrusel.jsx';


const Maincarrusel = () => {
  const imageFilenames = ['escritorio.jpg', 'flores.jpeg', 'fotopeluquera.png', 'imagenbogota.jpg', 'imagencursos.jpg', 'imagenoficina.jpg']; 

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="maincarrusel">
      <h1>Image Carousel</h1>
      <ImageCarousel
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default Maincarrusel;