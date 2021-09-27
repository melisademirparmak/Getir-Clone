import React from 'react';
import Slider from 'react-slick';

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[600px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
            alt="Getir 1"
          />
        </div>
        <div>
          <img
            className="w-full h-[600px]"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
            alt="Getir 2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
