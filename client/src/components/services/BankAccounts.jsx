import React from 'react';
import styled from 'styled-components';
import Banking_Image from '../../assets/banking.jpg'; // You'll need to add this image to your assets
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

const BankAccounts = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Banking</span>
                <span className="text-[#74767a] ml-2">Solutions</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Simplifying Banking in Germany for Locals and Expats</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo and Partners, we specialize in simplifying the German banking system for our clients. Opening and managing bank accounts in Germany can be challenging, especially for expatriates and newcomers, due to language barriers and complex documentation requirements. Our dedicated team provides comprehensive support to help you navigate the German banking landscape with ease.
                  </p>
                  <p className="text-gray-600">
                    Whether you need a personal account, business banking solutions, or specialized financial services, we work with various banks across Germany to find the perfect match for your specific needs and circumstances.
                  </p>
                </div>

                {/* Services Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Personal Banking Services</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Current accounts (Girokonto) with various banks across Germany</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Savings accounts (Sparkonto) with competitive interest rates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Assistance with account opening documentation in English</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Support with SCHUFA (German credit rating) establishment</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Card Services & Online Banking</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Credit card applications with benefits tailored to your lifestyle</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Debit cards (EC-Karte/Girocard) for everyday transactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Setup and troubleshooting for online and mobile banking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Digital payment solutions (Apple Pay, Google Pay, etc.)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Business Banking Solutions</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Business account setup for all company structures (GmbH, UG, Freelancer)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Multi-currency accounts for international businesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Merchant services and payment processing solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Business credit facilities and financing options</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Get Banking Assistance
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Services */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Banking_Image}
                    alt="Banking Services"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Our Banking Services?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Partnerships with traditional banks and modern fintechs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Multilingual support for international clients (English, German)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Time-saving assistance with paperwork and applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Comparison of different banking options to find the best fit</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      We take the stress out of banking in Germany, ensuring a smooth experience from account opening to day-to-day financial management.
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

export default BankAccounts; 