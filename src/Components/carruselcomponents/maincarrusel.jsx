import React, { useState } from 'react';
import './../../Stylesheets/Secciontercera.css';
import ImageCarousel from './imagecarrusel.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Maincarrusel = () => {

    const imageFilenames = ['escritorio.jpg', 'flores.jpeg', 'temis2.jpg', 'imagenbogota.jpg', 'imagencursos.jpg', 'imagenoficina.jpg']; 

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="maincarrusel">
      
      <ImageCarousel
        images={imageFilenames}
        selectedIndex={selectedIndex}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default Maincarrusel;