import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Badenia from '../assets/partners/Badenia.png';
import DeutscheBank from '../assets/partners/DeutscheBank.jpeg';
import DVAG from '../assets/partners/DVAG.png';
import Geiger from '../assets/partners/Geiger.png';
import prohyp from '../assets/partners/prohyp.png';
import Carousel from './Carousel';
import styled from 'styled-components';
import profile1 from '../assets/1.jpg';
import profile2 from '../assets/2.jpg';
import profile3 from '../assets/3.jpg';
import profile4 from '../assets/4.jpg';
import TeamMember from './TeamMember';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import ServiceSection from './ServiceSection';
import { useState } from 'react';
//import ScheduleModal from './ScheduleModal';

const TeamSection = styled.div`
  padding: 3rem 0;
  text-align: center;
  background-color: #f9f5f0;
`;

const TeamHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  
  span {
    font-weight: bold;
    color: #774800;
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

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  background: #774800;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 220px;

  &:hover {
    background: #8b5500;
    transform: translateY(-2px);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    max-width: 280px;
  }
`;

const PartnersSection = styled.div`
  background: #f9f5f0;
  padding: 3rem 0;
  margin-top: 0;
  border-top: 1px solid #e5e5e5;
  text-align: center;
`;

const PartnersTitle = styled.h3`
  font-size: 1.8rem;
  color: #774800;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const PartnersGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  img {
    height: 40px;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
    
    img {
      height: 30px;
    }
  }
`;

const Profile = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

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
        {/* Hero Section - Reverted back to original */}
        <Carousel />
        <div className="grid gap-12 items-center">
          {/* Main Service Section */}
          <ServiceSection />

          {/* Call to Action Buttons - Keeping improved version */}
          <ActionButtons>
            <Button onClick={() => setIsContactFormOpen(true)}>
              GET IN TOUCH
            </Button>
            <Button onClick={() => setIsScheduleModalOpen(true)}>
              SCHEDULE CONSULTATION
            </Button>
          </ActionButtons>
        </div>
        
        {/* Partners Section - Keeping improved version */}
        <PartnersSection>
          <div className="max-w-6xl mx-auto px-4">
            <PartnersTitle>Our Trusted Partners</PartnersTitle>
            <PartnersGrid>
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                />
              ))}
            </PartnersGrid>
          </div>
        </PartnersSection>

        {/* Team Section - Keeping improved version */}
        <TeamSection>
          <div className="max-w-6xl mx-auto px-4">
            <TeamHeader>
              Meet the <span>team</span>
            </TeamHeader>
            <TeamGrid>
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
              ))}
            </TeamGrid>
          </div>
        </TeamSection>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
      
      {/* <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      /> */}
    </div>
  );
};

export default Profile;