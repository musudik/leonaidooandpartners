import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import hero1 from '../assets/Hero1.jpg';
import hero2 from '../assets/Hero2.jpg';
import hero3 from '../assets/Hero3.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-bottom: 2rem;

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    &:before {
      font-size: 40px;
    }
  }
  
  .slick-prev {
    left: 25px;
  }
  
  .slick-next {
    right: 25px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 2%;
  left: 25%;
  color: white;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  p {
    font-size: 1.5rem;
    max-width: 800px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const SlideWrapper = styled.div`
  position: relative;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const slides = [
    {
      image: hero1,
      title: "Welcome to Our Services",
      description: "Discover our comprehensive financial solutions tailored to your needs"
    },
    {
      image: hero2,
      title: "Expert Financial Advice",
      description: "Get professional guidance for your financial future"
    },
    {
      image: hero3,
      title: "Personalized Solutions",
      description: "Custom strategies designed specifically for you"
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <SlideWrapper key={index}>
            <SlideImage src={slide.image} alt={`Slide ${index + 1}`} />
            <TextOverlay>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </TextOverlay>
          </SlideWrapper>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel; 