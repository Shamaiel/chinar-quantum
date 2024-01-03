import React from 'react';
import { Carousel } from 'flowbite-react';
import './Hero.css'; // Import a CSS file for custom styles

const Hero = () => {
  
  
    return (
    <div className="h-80 sm:h-64 xl:h-80 2xl:h-96 mt-3">
      <Carousel pauseOnHover>
        <img
          className="carousel-image"
          src="https://chinarquantumai.org/images/photos/5.png"
          alt="..."
        />
        <img
          className="carousel-image"
          src="https://chinarquantumai.org/images/photos/1.png"
          alt="..."
        />
        <img
          className="carousel-image"
          src="https://chinarquantumai.org/images/photos/2.png"
          alt="..."
        />
        <img
          className="carousel-image"
          src="https://chinarquantumai.org/images/photos/4.png"
          alt="..."
        />
        <img
          className="carousel-image"
          src="https://chinarquantumai.org/images/photos/3.png"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default Hero;
