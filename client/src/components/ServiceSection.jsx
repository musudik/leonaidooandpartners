import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ServicesColumn = styled.div`
  h2 {
    color: #774800;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ServiceCard = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #f9f5f0;
    transform: translateX(10px);
  }

  h3 {
    color: #774800;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-style: italic;
  }
`;

const ServiceSection = () => {
  const services = [
    {
      title: "Pension & Retirement Planning",
      description: "Secure your golden years with tailored plans that prioritize your dreams and peace of mind"
    },
    {
      title: "Tax Services",
      description: "Simplify tax season with strategies that maximize your benefits while ensuring compliance"
    },
    {
      title: "Loans Made Simple",
      description: "Personal, Home/Real Estate, Business, and Student Loans tailored to your needs"
    },
    {
      title: "Insurance Solutions",
      description: "Protect your health, assets, and peace of mind with comprehensive insurance options"
    },
    {
      title: "Energy Savings",
      description: "Slash your electricity bills with customized energy reduction strategies"
    },
    {
      title: "Wealth Building",
      description: "Invest in Gold and navigate Real Estate opportunities with confidence"
    },
    {
      title: "Banking Made Easy",
      description: "Open or optimize your Bank Accounts with our expert assistance"
    }
  ];

  return (
    <Container>
      <ServicesColumn>
        <h2>What We Offer</h2>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesColumn>
    </Container>
  );
};

export default ServiceSection; 