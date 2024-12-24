import React, { useState } from 'react';
import styled from 'styled-components';
import TaxReturnsForm from './TaxReturnsForm';
import TaxReturnsCalculator from './TaxReturnsCalculator';
import Tax_Return from './../assets/Tax_Returns.png'; 

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

  return (
    <PageWrapper>
      <ContentWrapper>
      <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-black">Tax </span>
            <span className="text-gray-200 ml-2">Returns</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
              Tax services encompass planning, filing, and advisory solutions to help individuals and businesses comply with tax laws while optimizing their tax liability. These services ensure accurate reporting, timely submissions, and claim deductions and credits to minimize payable taxes. A tax professional or software can identify opportunities for savings and help avoid penalties or audits.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3"></h2>
              <p className="text-gray-600">
              Tax planning also involves strategies like income deferral, investment in tax-advantaged accounts, or charitable donations to align with financial goals. Efficient tax services provide clarity, reduce stress, and often result in significant financial savings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Example</h2>
              <p className="text-gray-600">
              Emma, a freelance graphic designer, worked with a tax advisor who identified her home office expenses, equipment purchases, and internet bills as deductible. These insights reduced her taxable income by $15,000, saving her $3,000 in taxes.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src={Tax_Return}
              alt="Team meeting at Salted Stone"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
          </div>
        </div>
       
        
        <Button onClick={() => setIsFormOpen(true)}>
          Start Tax Return
        </Button>
        
        <Button onClick={() => setIsCalculatorOpen(true)}>
          Calculate Tax Return
        </Button>

        <TaxReturnsForm 
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
        
        <TaxReturnsCalculator 
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
        />
        </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TaxReturns; 