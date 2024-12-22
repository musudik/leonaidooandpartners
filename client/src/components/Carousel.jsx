import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes, css } from "styled-components";
import hero1 from '../assets/Hero1.jpg';
import hero2 from '../assets/Hero2.jpg';
import hero3 from '../assets/Hero3.jpg';

const CarouselContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 600px;
  overflow: hidden;

  .slide-content {
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: white;
    z-index: 1;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.2rem;
    }
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

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;


const drawLine = keyframes`
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
`;

const glowEffect = keyframes`
  0% { filter: drop-shadow(0 0 2px rgba(77, 213, 254, 0.4)); }
  50% { filter: drop-shadow(0 0 8px rgba(77, 213, 254, 0.6)); }
  100% { filter: drop-shadow(0 0 2px rgba(77, 213, 254, 0.4)); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const FinanceOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
`;

const SVGContainer = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Hexagon = styled.g`
  opacity: 0;
  animation: ${props => css`${fadeIn} 0.8s ease-out forwards`};
  animation-delay: ${props => props.delay || '0s'};
`;

const HexagonPath = styled.path`
  fill: rgba(77, 213, 254, 0.1);
  stroke: rgba(77, 213, 254, 0.8);
  stroke-width: 1.2;
  animation: ${props => css`${glowEffect} 2s infinite`};
`;

const FinanceText = styled.text`
  font-size: 64px;
  fill: #fff;
  font-weight: bold;
  text-shadow: 0 0 20px rgba(77, 213, 254, 0.8);
  opacity: 0;
  animation: ${props => css`${fadeIn} 1s ease-out forwards`};
  animation-delay: 0.5s;
`;

const IconText = styled.text`
  fill: #fff;
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-anchor: middle;
  dominant-baseline: middle;
  opacity: ${props => props.opacity || '1'};
`;

const ConnectingLine = styled.line`
  stroke: rgba(77, 213, 254, 0.4);
  stroke-width: 1;
  stroke-dasharray: 5,5;
`;

const ChartLine = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: rgba(119, 72, 0, 0.6);
  animation: ${fadeInOut} 2s linear infinite;
  animation-delay: ${props => props.delay || '0s'};
  transform: rotate(${props => props.rotate || '0deg'});
`;

const CircleIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border: 3px solid #774800;
  border-radius: 50%;
  animation: ${rotateAnimation} 4s linear infinite;
  opacity: 0.6;
`;

const AnimatedPath = styled.path`
  fill: none;
  stroke: #fff;
  stroke-width: 1;
  stroke-dasharray: 1000;
  animation: ${props => css`${drawLine} 2s ease-in-out forwards`};
  animation-delay: ${props => props.delay || '0s'};
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
      description: "Discover our comprehensive financial solutions"
    },
    {
      image: hero2,
      title: "Expert Financial Advice",
      description: "Get professional guidance for your future"
    },
    {
      image: hero3,
      title: "Personalized Solutions",
      description: "Custom strategies designed for you"
    },
  ];

  const hexagonSize = 50;
  const icons = [
    { 
      icon: "👴", 
      text: "PENSION",
      subtext: "Retirement Services"
    },
    { 
      icon: "📑", 
      text: "TAX",
      subtext: "Tax Services"
    },
    { 
      icon: "💳", 
      text: "LOANS",
      subtext: "Personal • Home • Business",
      subItems: ["Personal", "Home", "Business", "Student"]
    },
    { 
      icon: "🛡️", 
      text: "INSURANCE",
      subtext: "Health • Car • Life",
      subItems: ["Health", "Car", "Liability", "Disability"]
    },
    { 
      icon: "⚡", 
      text: "ELECTRICITY",
      subtext: "Bill Reduction"
    },
    { 
      icon: "🏆", 
      text: "GOLD",
      subtext: "Investment"
    },
    { 
      icon: "🏠", 
      text: "REAL ESTATE",
      subtext: "Property Investment"
    },
    { 
      icon: "🏦", 
      text: "BANKING",
      subtext: "Account Services"
    },
    { 
      icon: "📊", 
      text: "ANALYSIS",
      subtext: "Financial Planning"
    },
    { 
      icon: "🔒", 
      text: "SECURITY",
      subtext: "Asset Protection"
    }
  ];

  const createHexagonPath = (x, y, size) => {
    const h = size * Math.sqrt(3) / 2;
    return `M ${x},${y-size} 
            L ${x+h},${y-size/2} 
            L ${x+h},${y+size/2} 
            L ${x},${y+size} 
            L ${x-h},${y+size/2} 
            L ${x-h},${y-size/2} Z`;
  };

  const createHexagonPositions = (totalIcons) => {
    const positions = [];
    const startX = 300;
    const startY = 300;
    const rows = 3;
    const itemsPerRow = Math.ceil(totalIcons / rows);
    
    for (let i = 0; i < totalIcons; i++) {
      const row = Math.floor(i / itemsPerRow);
      const col = i % itemsPerRow;
      const xOffset = (row % 2) * (hexagonSize * 0.75);
      
      positions.push({
        x: startX + (col * hexagonSize * 1.5) + xOffset,
        y: startY + (row * hexagonSize * 1.7) - 100
      });
    }
    return positions;
  };

  const IconContent = ({ x, y, item }) => (
    <>
      <IconText x={x} y={y-15} fontSize="14">{item.icon}</IconText>
      <IconText x={x} y={y+5} fontSize="9" fontWeight="bold">{item.text}</IconText>
      <IconText x={x} y={y+15} fontSize="7" opacity="0.8">{item.subtext}</IconText>
    </>
  );

  const SubItems = styled.g`
    opacity: 0;
    transition: opacity 0.3s;
    ${Hexagon}:hover & {
      opacity: 1;
    }
  `;

  return (
    <CarouselContainer>
      <FinanceOverlay>
        <SVGContainer viewBox="100 0 1000 600" preserveAspectRatio="xMidYMid meet">

          {icons.map((item, index) => {
            const angle = (index * Math.PI * 2) / icons.length;
            const radius = 180;
            const x = 300 + radius * Math.cos(angle);
            const y = 300 + radius * Math.sin(angle);

            return (
              <Hexagon key={index} delay={`${index * 0.2}s`}>
                <HexagonPath d={createHexagonPath(x, y, hexagonSize)} />
                <IconContent x={x} y={y} item={item} />
                
                {item.subItems && (
                  <SubItems>
                    {item.subItems.map((subItem, subIndex) => (
                      <IconText 
                        key={subIndex}
                        x={x + hexagonSize * 1.2}
                        y={y + (subIndex * 15) - 15}
                        fontSize="8"
                        fill="rgba(255, 255, 255, 0.9)"
                      >
                        • {subItem}
                      </IconText>
                    ))}
                  </SubItems>
                )}

                <ConnectingLine 
                  x1={x} 
                  y1={y} 
                  x2={300} 
                  y2={300}
                  strokeDasharray="2,2"
                />
              </Hexagon>
            );
          })}
        </SVGContainer>
      </FinanceOverlay>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img 
              src={slide.image} 
              alt={slide.title}
              style={{ 
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }} 
            />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel; 