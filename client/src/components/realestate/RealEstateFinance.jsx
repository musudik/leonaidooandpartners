import React from 'react';
import styled from 'styled-components';
import RealEstate_Image from '../../assets/Real_Estate.jpg';
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

const RealEstateFinance = () => {
  // Function to handle the button click and navigate to the external URL
  const handleStartBuildingClick = () => {
    window.open('https://wealth-coach.replit.app/form/self-disclosure', '_blank');
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">B³ Concept</span>
                <span className="text-[#74767a] ml-2">= Borrow | Buy | Build</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">The Smart Real Estate Strategy for Generational Wealth</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo & Partners, we believe in building wealth the smart way—by leveraging the power of banks, tax benefits, and strategic investing. Our exclusive B³ concept is designed to help you grow your wealth tax-efficiently and secure your financial future.
                  </p>
                </div>

                {/* Strategy Sections */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#774800] mb-3">How B³ Works</h3>
                  
                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">1. Borrow – Use the Bank's Money, Not Yours!</h4>
                    <p className="text-gray-600 mb-4">
                      When you borrow money from the bank to invest in real estate, do you pay taxes on that loan? No! Borrowed money is tax-free, giving you the financial leverage to invest without using your own capital.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">2. Buy – Enjoy Massive Tax Benefits for 10 Years</h4>
                    <p className="text-gray-600 mb-4">
                      With the borrowed tax-free money, you buy real estate—an asset that not only grows in value but also provides you with significant tax benefits for 10 straight years.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">3. Build – Profit Tax-Free or Pass It to the Next Generation</h4>
                    <p className="text-gray-600 mb-4">
                      After 10 years, you have two powerful options:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Sell the property – and pay zero taxes on your profits!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Keep the property – and secure your family's future. If you want to pass it on without debt, we can set up a strategic life insurance plan to clear off the remaining loan, so you leave assets, not liabilities for your next generation.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={handleStartBuildingClick}>
                    Start Building Wealth Today
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Services */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={RealEstate_Image}
                    alt="Real Estate Investment"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose B³?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✅</span>
                        <span>Make money with borrowed money – a proven strategy for wealth creation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✅</span>
                        <span>Zero taxes on borrowed capital & long-term real estate gains</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✅</span>
                        <span>Massive tax deductions for 10 years</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✅</span>
                        <span>Smart estate planning – leave behind wealth, not debt</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✅</span>
                        <span>Tailored solutions from our expert consultants</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">This is how real wealth is built!</h3>
                    <p className="text-gray-600 mb-4">
                      Let's create generational wealth together. Ready to start?
                    </p>
                    <p className="text-gray-700 font-medium">
                      Contact us today and let's build your legacy with B³ – Borrow | Buy | Build.
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

export default RealEstateFinance; 