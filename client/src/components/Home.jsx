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


const PartnersContainer = styled.div`
  background-color: #f9f5f0; // Light beige background that complements the theme
  padding: 2rem 0;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #774800; // Theme color strip at the top
  }
`;

const ScrollingWrapper = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const PartnerImage = styled.img`
  height: 40px;
  margin: 0 2rem;
  opacity: 0.9;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const TeamSection = styled.div`
  padding: 4rem 0;
  text-align: center;
`;

const TeamHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  
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

const Profile = () => {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Contact
            </h1>
            <p className="text-gray-600 mb-8">
              We're here to help and answer any question you might have. We look forward to hearing from you. Feel free to reach out to us anytime, we'll get back to you as soon as possible.
            </p>
            <button className="bg-[#774800] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f9a53a] transition-colors">
              GET CONTACT
            </button>
          </div>
          <div className="relative">
            <img 
              width="500px"
              height="500px"
              src={servicesImg} 
              alt="Profile" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
        {/* Partners Section */}
        <PartnersContainer>
          <div className="max-w-6xl mx-auto">
            <ScrollingWrapper>
              {/* Double the partners for seamless scrolling */}
              {[...partners, ...partners].map((partner, index) => (
                <PartnerImage
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                />
              ))}
            </ScrollingWrapper>
          </div>
        </PartnersContainer>
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
    </div>
  );
};

export default Profile;