import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroM = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div w-full>
      <Slider {...settings}>
        <div  w-full>
            <img src="https://chinarquantumai.org/images/photos/5.png" alt="image"  className="w-full h-auto"/>
        
        </div>
        <div   w-full>
            <img src="https://chinarquantumai.org/images/photos/1.png" alt="image"  className=" w-full h-auto"/>
        
        </div>

        <div   w-full>
            <img src="https://chinarquantumai.org/images/photos/2.png" alt="image"  className=" w-full h-auto"/>
        
        </div>

       
      </Slider>
    </div>
  );
};

export default HeroM;
