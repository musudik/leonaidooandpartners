import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import servicesImg from '../assets/Services-c2.png'; // Add your profile image
import Badenia from '../assets/partners/Badenia.png';
import DeutscheBank from '../assets/partners/DeutscheBank.jpeg';
import DVAG from '../assets/partners/DVAG.png';
import Geiger from '../assets/partners/Geiger.png';
import prohyp from '../assets/partners/prohyp.png';
import Carousel from './Carousel'; // Import the CarouselPage component
import styled from 'styled-components';
import profile1 from '../assets/1.jpg';
import profile2 from '../assets/2.jpg';
import profile3 from '../assets/3.jpg';
import profile4 from '../assets/4.jpg';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { useState } from 'react';

const TeamSection = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const TeamHeader = styled.h2`
  font-size: 2.5rem;
  
  span {
    font-weight: bold;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const ServiceTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f9f5f0;
    transform: translateX(10px);
    box-shadow: 0 2px 8px rgba(119, 72, 0, 0.1);
    
    h3 {
      color: #8b5500;
    }
  }
`;

const ServiceItem = styled.div`
  margin-bottom: 1.2rem;
  
  h3 {
    color: #774800;
    font-size: 1.1rem;
    font-weight: 600;
    display: inline-block;
    transition: color 0.3s ease;
  }
  
  p {
    color: #555;
    font-size: 0.95rem;
    display: inline;
  }
`;

const SubServiceList = styled.ul`
  list-style: none;
  padding-left: 1.2rem;
  margin: 0.5rem 0;
`;

const SubServiceItem = styled.li`
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
  
  strong {
    color: #774800;
    font-style: normal;
  }
`;

const WhyChooseSection = styled.section`
  padding: 2rem 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ContactButton = styled.button`
  background: #774800;
  color: white;
  padding: 0.7rem 2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(119, 72, 0, 0.15);
  margin: 2rem 0;

  &:hover {
    background: #8b5500;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(119, 72, 0, 0.2);
  }
`;

const PartnersSection = styled.div`
  background: #f9f5f0;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 3px solid #774800;
`;

const PartnersGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  img {
    height: 35px;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const Profile = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const partners = [
    { src: Badenia, alt: "Badenia" },
    { src: DeutscheBank, alt: "Deutsche Bank" },
    { src: DVAG, alt: "DVAG" },
    { src: Geiger, alt: "Geiger" },
    { src: prohyp, alt: "prohyp" },
  ];

  const teamMembers = [
    {
      name: "STEVE AMBUUL",
      title: "CHIEF MEMBER OFFICER",
      image: profile1,
      email: "steve@example.com",
      phone: "+1 234 567 890",
      description: "Over 15 years of experience in financial services and team leadership."
    },
    {
      name: "ALDEN DALE",
      title: "DIRECTOR OF SOLUTIONS",
      image: profile2,
      email: "alden@example.com",
      phone: "+1 234 567 891",
      description: "Specialized in developing innovative financial solutions for clients."
    },
    {
      name: "KALEY",
      title: "DIRECTOR OF STRATEGY & SERVICE, EMEA",
      image: profile3,
      email: "kaley@example.com",
      phone: "+1 234 567 892",
      description: "Expert in EMEA market strategy and client relations."
    },
    {
      name: "PHIL DUPERUIS",
      title: "DIRECTOR OF CLIENT SERVICES, NA",
      image: profile4,
      email: "phil@example.com",
      phone: "+1 234 567 893",
      description: "Focused on delivering exceptional client service in North America."
    },
    {
      name: "TONY EADES",
      title: "CHIEF EVANGELIST",
      image: profile1,
      email: "tony@example.com",
      phone: "+1 234 567 894",
      description: "Passionate about spreading financial literacy and client education."
    }
  ];

  return (
    <div className="page-container bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-0">
        {/* Hero Section */}
        <Carousel />
        <div className="grid gap-12 items-center">
          <div>
            {/* Header Section */}
            <div className="mt-16">
              <h3 className="text-6xl font-black mb-2">
                <span className="text-[#774800]">Leo Naidoo </span>
                <span className="text-gray-200 ml-2">& Partners</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-2">
              <b><span className="text-[#774800]">Welcome to Leo Naidoo & Partners: Your Trusted Ally in Financial Freedom </span>
              </b>
              <p>At Leo Naidoo & Partners, we're more than financial advisors – we're your partners in building a secure, 
                successful, and stress-free future. Whether you're planning for retirement, navigating taxes, 
                or exploring loans, our expert team is here to guide you every step of the way.</p>
            </p>

            {/* What We Offer Section */}
            <ServicesSection>
              <ServiceTitle>What We Offer</ServiceTitle>
              
              <ServiceLink to="/pension-retirement">
                <ServiceItem>
                  <h3>Pension & Retirement Planning:</h3>
                  <SubServiceList>
                    <SubServiceItem>Secure your golden years with tailored plans that prioritize your dreams and peace of mind.</SubServiceItem>
                  </SubServiceList>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/tax-returns">
                <ServiceItem>
                  <h3>Tax Services:</h3>
                  <SubServiceList>
                    <SubServiceItem>Simplify tax season with strategies that maximize your benefits while ensuring compliance.</SubServiceItem>
                  </SubServiceList>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/loans">
                <ServiceItem>
                  <h3>Loans Made Simple:</h3>
                  <SubServiceList>
                    <SubServiceItem><strong>Personal Loans</strong> for life's moments that matter.</SubServiceItem>
                    <SubServiceItem><strong>Home/Real Estate Loans</strong> to turn your dream home into reality.</SubServiceItem>
                    <SubServiceItem><strong>Business Loans</strong> to fuel your entrepreneurial ambitions.</SubServiceItem>
                    <SubServiceItem><strong>Student Loans</strong> to invest in a brighter future.</SubServiceItem>
                  </SubServiceList>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/insurance">
                <ServiceItem>
                  <h3>Insurance Solutions:</h3>
                  <SubServiceList>
                    <SubServiceItem>Protect your health, assets, and peace of mind with comprehensive <em>Health, Car, Liability,</em> and <em>Disability Insurance</em>.</SubServiceItem>
                  </SubServiceList>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/energy-savings">
                <ServiceItem>
                  <h3>Energy Savings:</h3>
                  <p>Slash your electricity bills with customized energy reduction strategies.</p>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/wealth-building">
                <ServiceItem>
                  <h3>Wealth Building:</h3>
                  <SubServiceList>
                    <SubServiceItem>Invest in <em>Gold</em> – a timeless asset for financial growth.</SubServiceItem>
                    <SubServiceItem>Navigate <em>Real Estate</em> opportunities with confidence.</SubServiceItem>
                  </SubServiceList>
                </ServiceItem>
              </ServiceLink>
              
              <ServiceLink to="/banking">
                <ServiceItem>
                  <h3>Banking Made Easy:</h3>
                  <p>Open or optimize your <em>Bank Accounts</em> with our expert assistance.</p>
                </ServiceItem>
              </ServiceLink>
            </ServicesSection>

            {/* Why Choose Us Section */}
            <WhyChooseSection>
              <ServiceTitle>Why Choose Us?</ServiceTitle>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                With Leo Naidoo & Partners, you gain access to a team that's passionate about empowering your financial journey. 
                From personalized consultations to robust solutions, we work tirelessly to unlock your financial potential.
              </p>
              <p className="text-sm font-medium text-gray-700 mt-4">
                Your financial success starts here. Let's shape your future – together.
              </p>
              <ContactButton onClick={() => setIsContactFormOpen(true)}>
                GET CONTACT
              </ContactButton>
            </WhyChooseSection>
          </div>
        </div>
        
        {/* Partners Section */}
        <PartnersSection>
          <PartnersGrid>
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.alt}
              />
            ))}
          </PartnersGrid>
        </PartnersSection>
        {/* Team Section */}
        <TeamSection>
          <TeamHeader>
            Meet the <span>team</span>
          </TeamHeader>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </TeamGrid>
        </TeamSection>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default Profile;