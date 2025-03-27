import React from 'react';
import styled from 'styled-components';
import RealEstate_Image from '../../assets/Real_Estate.jpg'; // You'll need to add this image
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
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Build Generational</span>
                <span className="text-[#74767a] ml-2">Wealth</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">with Leonaidoo & Partners</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo & Partners, we believe in smart wealth strategies that ensure financial security for you and generational wealth for your family. One of our most powerful methods is the "Borrow, Buy & Build" strategy, a proven way to build wealth while maximizing tax benefits and protecting your legacy.
                  </p>
                </div>

                {/* Strategy Sections */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#774800] mb-3">How It Works</h3>
                  
                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">1. Borrow Money to Invest in Real Estate</h4>
                    <p className="text-gray-600 mb-4">
                      Instead of using your hard-earned cash, we guide you in leveraging bank financing to acquire cash-flowing real estate properties. In Germany, holding real estate for at least 10 years makes capital gains completely tax-free.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">2. Enjoy Massive Tax Benefits for 10 Years</h4>
                    <p className="text-gray-600 mb-4">
                      During the first 10 years, you benefit from:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Depreciation deductions on your properties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Mortgage interest tax write-offs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Expense deductions (repairs, management, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Rental income optimization to maximize tax savings</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      With the right structure, you build equity tax-free while keeping more money in your pocket.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#774800] mb-3">3. Protect Your Wealth – Life Insurance Pays Off the Loan</h4>
                    <p className="text-gray-600 mb-4">
                      Instead of worrying about leaving behind debt, we help you set up a strategic life insurance policy that covers your remaining mortgage balance. When the time comes, your heirs inherit:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Debt-free properties</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Tax-free payouts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Steady cash flow from rental income</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      This ensures your family continues to benefit from your legacy without any financial burdens.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Book a Free Consultation
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
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why This Strategy Works</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Build real, lasting wealth without using all your savings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Pay little to no taxes while growing your assets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Create generational financial security without complex estate planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Protect your legacy by eliminating debt for your heirs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Let's Build Your Wealth Plan Today!</h3>
                    <p className="text-gray-600 mb-4">
                      At Leonaidoo & Partners, we specialize in crafting personalized financial strategies that set you and your family up for long-term success. Whether you're starting or scaling your portfolio, our expertise ensures your money works smarter, not harder.
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