import React from 'react';
import './Image.css';

const Image = ({ src, isSelected, onClick }) => {
  const imageSize = isSelected ? 'main-image' : 'side-image';

  return (
    <img
      src={src}
      alt="carousel-image"
      className={`carousel-image ${imageSize}`}
      onClick={onClick}
    />
  );
};

export default Image;