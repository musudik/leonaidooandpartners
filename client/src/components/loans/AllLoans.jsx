import React from 'react';
import styled from 'styled-components';
import Loans_Image from '../../assets/Loans_All.jpg'; // You'll need to add this image
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

const AllLoans = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Best Loan Deals</span>
                <span className="text-[#74767a] ml-2">in Germany</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Lowest Interest Rates, Maximum Flexibility</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo and Partners, we specialize in securing the best financing solutions for individuals, entrepreneurs, and businesses across Germany. Whether you're looking for a personal loan, business loan, real estate financing, or state-backed funding, we ensure you get the lowest interest rates with the highest flexibility.
                  </p>
                </div>

                {/* Loan Types Section */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">Types of Loans Available in Germany</h3>
                  <p className="text-gray-600 mb-4">
                    Germany offers a variety of loan options tailored to different needs. We help you navigate through:
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">1. Personal Loans (Privatkredit)</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">Unsecured Loans – No collateral required, quick approvals.</li>
                      <li className="text-gray-600">Secured Loans – Lower interest rates when backed by assets.</li>
                      <li className="text-gray-600">Debt Consolidation Loans – Merge multiple debts into one manageable payment.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">2. Mortgage Loans (Immobilienkredit/Baufinanzierung)</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">Home Purchase Loans – Financing for buying your dream home.</li>
                      <li className="text-gray-600">Construction Loans – Build your property from scratch with flexible financing.</li>
                      <li className="text-gray-600">Refinancing Loans – Restructure your existing mortgage for better terms.</li>
                      <li className="text-gray-600">KfW Homeownership Loans – State-supported loans with low interest for first-time buyers.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">3. Business & Startup Loans (Unternehmensfinanzierung)</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">KfW Startup Loans – Government-backed loans with attractive interest rates.</li>
                      <li className="text-gray-600">Business Expansion Loans – Funds for scaling and growing your business.</li>
                      <li className="text-gray-600">Working Capital Loans – Short-term liquidity solutions.</li>
                      <li className="text-gray-600">Equipment Financing – Invest in machinery, vehicles, or office equipment.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">4. Real Estate Investment Loans (Immobilien-Investitionskredite)</h4>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Buy-to-Let Mortgages – Finance rental properties with optimal tax benefits.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Commercial Property Loans – Invest in office spaces, retail stores, or warehouses.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Development Loans – Finance real estate projects from planning to completion.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">5. Car Loans (Autokredit)</h4>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Bank Car Loans – Fixed or variable interest rates for purchasing vehicles.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Dealer Financing – Direct financing from car dealerships.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Leasing Options – Drive a new car without full ownership commitment.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Get Your Loan Approved Today
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Info */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Loans_Image}
                    alt="Loan Services"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* Additional Loan Types */}
                  

                  {/* Government-Backed Loans Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Government-Backed Loans & Funding Programs</h3>
                    <p className="text-gray-600 mb-4">
                      Germany offers several state-sponsored loan programs to support startups, real estate investors, and business owners. Some of the most popular options include:
                    </p>
                    <div className="mb-4">
                      <h4 className="font-bold text-[#774800]">KfW Bank Loans</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>KfW-Startgeld – Up to €125,000 for new businesses with low-interest rates.</li>
                        <li>ERP-Gründerkredit – Financing for entrepreneurs and SMEs.</li>
                        <li>KfW-Effizienzhaus Loans – Special loans for energy-efficient property renovations.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Why Choose Us Section */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Leonaidoo and Partners?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2 font-bold">✅</span>
                        <span><strong>Lowest Interest Rates</strong> – We negotiate the best terms for your loans.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2 font-bold">✅</span>
                        <span><strong>Customized Loan Structures</strong> – Flexible repayment plans that fit your needs.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2 font-bold">✅</span>
                        <span><strong>Expert Guidance</strong> – End-to-end support from application to approval.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2 font-bold">✅</span>
                        <span><strong>Government & Private Financing</strong> – We connect you with both public and private lenders.</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4 font-medium">
                      We make financing simple, fast, and affordable!
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

export default AllLoans; 