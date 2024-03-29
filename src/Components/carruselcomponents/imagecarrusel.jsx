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

  const getNormalizedIndex = (index) => {
    const length = images.length;
    if (index < 0) {
      return length + (index % length);
    }
    return index % length;
  };

  const renderImages = () => {
    const normalizedIndex = getNormalizedIndex(selectedIndex);

    return [-1, 0, 1].map((offset) => {
      const index = getNormalizedIndex(normalizedIndex + offset);
      return (
        <Image
          key={index}
          src={`/image/${images[index]}`}
          isSelected = { offset === 0}
          onClick = {() => handleImageClick(index)}
        />
      );
    });
  };

return (
  <div className="image-carousel-container" ref={containerRef}>
    <div className="image-carousel">{renderImages()}</div>
    {/* <button className="scroll-button left" onClick={() => handleScroll('left')}>
      &lt;
    </button>
    <button className="scroll-button right" onClick={() => handleScroll('right')}>
      &gt;
    </button> */}
  </div>
);


  
  
};

export default ImageCarousel;