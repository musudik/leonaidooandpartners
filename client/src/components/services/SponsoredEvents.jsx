import React from 'react';
import styled from 'styled-components';
import Events_Image from '../../assets/Event.jpg'; // You'll need to add this image
import WhatsAppButton from '../common/WhatsAppButton';

const PageWrapper = styled.div`
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #8b5500;
  }
`;

const SponsoredEvents = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Leonaidoo & Partners:</span>
                <span className="text-[#74767a] block mt-2">A Proud Patron</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">of Sports and Cultural Heritage</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Leonaidoo & Partners has long been a staunch supporter of sports and cultural events, actively sponsoring numerous activities that bring communities together. Their unwavering commitment to fostering unity and promoting cultural and sporting excellence has made them a household name among various Indian communities in Munich and beyond.
                  </p>
                </div>

                {/* Sports Sponsorships Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">Sports Sponsorships</h3>
                  <p className="text-gray-600 mb-4">
                    Leonaidoo & Partners believes in the power of sports to unite people across different backgrounds and to promote healthy competition. Their sponsorship of sporting events has provided numerous opportunities for athletes and enthusiasts to showcase their skills and passion for the game. Some of their notable sports sponsorships include:
                  </p>
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Cricket Independence Cup</span> – Hosted by SV Lohhof Cricket Club, this tournament celebrates the spirit of independence and camaraderie among cricket lovers. Leonaidoo & Partners' sponsorship ensures that this event continues to thrive, providing an exciting platform for players to compete at a high level.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">•</span>
                      <div>
                        <span className="font-semibold">India Cup</span> – Organized by OneMunich365 and Indoeuropean.de, this prestigious cricket tournament brings together players from diverse backgrounds, fostering international friendships and competitive sportsmanship. Leonaidoo & Partners' generous support has played a significant role in making this event a grand success year after year.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Badminton</span> – Organized by Carbon Shuttles tournament
                         brings together Badminton players across different nationalities.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Connect With Us
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Info */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Events_Image}
                    alt="Sponsored Events"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* Cultural Events Section */}
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Cultural Event Sponsorships</h3>
                    <p className="text-gray-600 mb-4">
                      Beyond sports, Leonaidoo & Partners recognizes the importance of cultural heritage and community celebrations. They have been a regular sponsor for various Indian cultural events, ensuring that traditions are preserved and shared with the wider community. Their involvement includes support for the following organizations and events:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span><strong>München Tamil Sangam e.V.</strong> – A cultural association that brings together Tamil-speaking individuals in Munich, organizing events that celebrate Tamil heritage, literature, and arts.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span><strong>Mana Telugu Association, e.V.</strong> – Dedicated to promoting the rich Telugu culture, language, and traditions, this association benefits greatly from the financial backing of Leonaidoo & Partners.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span><strong>Odia Samaj Munich</strong> – A cultural group that focuses on Odia traditions, music, dance, and literature, fostering a sense of belonging among Odia-speaking people in Munich.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span><strong>Bihar & Jharkhand Fraternity Munich e.V.</strong> – A community that promotes the culture and heritage of Bihar and Jharkhand, organizing events to bring people together and celebrate their roots.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span><strong>Holi Event by OneMunich365 & Melodiesnmixes</strong> – The festival of colors is one of the most vibrant and eagerly anticipated celebrations. Leonaidoo & Partners helps ensure that this joyous occasion is celebrated with grandeur and enthusiasm.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Community Commitment Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">A Commitment to Community Growth</h3>
                    <p className="text-gray-600">
                      Leonaidoo & Partners' ongoing sponsorship efforts reflect their dedication to community development, social bonding, and cultural preservation. Their contributions not only support the execution of these events but also foster inclusivity and diversity. By investing in both sports and cultural events, they continue to strengthen ties within the Indian diaspora and beyond, ensuring that traditions are celebrated, and sportsmanship thrives for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <WhatsAppButton phoneNumber="4917647757767" />
    </PageWrapper>
  );
};

export default SponsoredEvents; 