import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://chinarquantumai.org/images/photos/5.png" },
    { url: "https://chinarquantumai.org/images/photos/1.png" },
    { url: "https://chinarquantumai.org/images/photos/2.png" },
    { url: "https://chinarquantumai.org/images/photos/3.png" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
  ];
const Tem = () => {
  return (
    <div>
        <SimpleImageSlider
        width={1200}
        height={800}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    </div>
  )
}

export default Tem
