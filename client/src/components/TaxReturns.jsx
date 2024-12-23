import { useState } from 'react';
import Tax_Return from './../assets/Tax_Returns.png'; 
import TaxReturnsCalculator from './TaxReturnsCalculator';
import styled from 'styled-components';

const CalculatorButton = styled.button`
  background: #774800;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: #8b5500;
  }
`;

const TaxReturns = () => {
  const [isTaxReturnsOpen, setIsTaxReturnsOpen] = useState(false);

  return (
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

        <div className="text-center mt-8">
          <CalculatorButton onClick={() => setIsTaxReturnsOpen(true)}>
            Open Tax Returns Calculator
          </CalculatorButton>
        </div>

        <TaxReturnsCalculator 
          isOpen={isTaxReturnsOpen} 
          onClose={() => setIsTaxReturnsOpen(false)} 
        />
      </div>
    </div>
  );
};

export default TaxReturns; 