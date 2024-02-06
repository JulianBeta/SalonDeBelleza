import React, { useRef } from 'react';
import './imagecarrusel.css';
import Image from './image.jsx';


const ImageCarousel = ({ images, selectedIndex, handleImageClick }) => {
  const containerRef = useRef(null);

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current;
    const scrollAmount = 300; // Adjust as needed

    if (scrollDirection === 'left') {
      container.scrollLeft -= scrollAmount;
    } else if (scrollDirection === 'right') {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="image-carousel-container" ref={containerRef}>
      <div className="image-carousel">
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/image/${image}`} 
            isSelected={index === selectedIndex}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <button className="scroll-button left" onClick={() => handleScroll('left')}>
        &lt;
      </button>
      <button className="scroll-button right" onClick={() => handleScroll('right')}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;