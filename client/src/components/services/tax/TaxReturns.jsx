import React, { useState } from 'react';
import styled from 'styled-components';
import TaxReturnsForm from './TaxReturnsForm';
import TaxReturnsCalculator from './TaxReturnsCalculator';
import Tax_Return from '../../../assets/Tax_Returns.png';
import WhatsAppButton from '../../common/WhatsAppButton';

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

const TaxReturns = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenForm = () => {
    window.open('https://wealth-coach.replit.app/form/tax-return', '_blank');
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Maximize Your</span>
                <span className="text-[#74767a] ml-2">Income</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">With Our Extra Tax Return Services!</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo & Partners, we don't just help you file your taxes—we optimize them! Our goal is to bring your netto closer to brutto by leveraging every legal tax advantage available to you. Whether you're a salaried employee, self-employed, or a business owner, we ensure you keep more of your hard-earned money where it belongs—in your pocket!
                  </p>
                </div>

                {/* Tax Optimization Solutions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">Our Tax Optimization Solutions:</h3>
                  
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Smart Tax Deductions</span> – We identify all possible deductions, including work-related expenses, home office costs, insurance contributions, and professional development.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Investment-Based Tax Relief</span> – Reduce your taxable income by investing strategically in real estate, retirement plans (like Riester Rente), and other tax-efficient assets.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Company Benefits & Allowances</span> – Unlock tax-free benefits, allowances, and incentives that increase your take-home pay without increasing your tax burden.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Customized Tax Strategies</span> – Whether you are a freelancer, an employee, or a business owner, we tailor tax-saving strategies that fit your financial situation.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Business Structuring for Entrepreneurs</span> – Optimize your company structure to reduce tax liability, retain more income, and scale your business profitably.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <div>
                        <span className="font-semibold">Real Estate Tax Benefits</span> – Take advantage of property investment tax reliefs, depreciation, and refinancing strategies to legally minimize taxes while building assets.
                      </div>
                    </li>
                  </ul>
                  
                </div>

                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setIsCalculatorOpen(true)}>
                    Estimate Tax Returns
                  </Button>
                  <Button onClick={handleOpenForm}>
                    File Tax Returns
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Services */}
              <div className="space-y-8">
                
                <div className="relative">
                  <img 
                    src={Tax_Return}
                    alt="Tax Return Services"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>
                {/* Why Choose Us Section */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Us?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span><strong>Maximized Tax Refunds</strong> – We ensure you receive every possible tax refund you're entitled to.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span><strong>Full Compliance</strong> – 100% legal tax-saving solutions without risks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span><strong>One-Stop Financial Growth</strong> – Our services go beyond tax returns. We help you build wealth with investments, business strategies, and tax-free income solutions.</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-bold text-[#774800]">Start Saving Today!</h4>
                      <p className="text-gray-600">
                        Book a free consultation and let's bring your netto closer to brutto with smart tax solutions!
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      
      {isFormOpen && (
        <TaxReturnsForm 
          isOpen={isFormOpen}
          onClose={handleCloseForm}
        />
      )}
      
      <TaxReturnsCalculator 
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
      
      <WhatsAppButton phoneNumber="4917647757767" />
    </PageWrapper>
  );
};

export default TaxReturns; 