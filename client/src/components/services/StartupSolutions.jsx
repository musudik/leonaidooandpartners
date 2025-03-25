import React from 'react';
import styled from 'styled-components';
import Startup_Image from '../../assets/Startup_Image.png'; // You'll need to add this image to your assets
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

const StartupSolutions = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">One-Stop</span>
                <span className="text-[#74767a] ml-2">StartUp</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Turnkey Solutions for Startups in Germany</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Starting a business in Germany can be super complex, but with Leonaidoo and Partners, it doesn't have to be. We offer customized turnkey solutions that take care of every aspect of your startup journey, so you can focus on what matters most—building your business and generating revenue.
                  </p>
                  <p className="text-gray-600">
                    With our in-house team of expert consultants, we navigate the complexities of the German legal, financial, and regulatory systems to provide you with a smooth, hassle-free startup process.
                  </p>
                </div>

                {/* Services Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Business Formation & Legal Structure</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Advising on the best business structure (GmbH, UG, Sole Proprietorship, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Handling all legal paperwork and registration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Ensuring compliance with German business laws</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">State Funding & Capital Acquisition</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Government grants and allowances to cover startup costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>State-backed loans and financing options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Investor matchmaking for funding your venture</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Get Started Today
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Services */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Startup_Image}
                    alt="Startup Solutions"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Us?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Turnkey Startup Solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Expert German Market Knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Access to Government Benefits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Strategic Growth Support</span>
                      </li>
                    </ul>
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

export default StartupSolutions; 