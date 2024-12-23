import { useState } from 'react';
import Pension_Retirement from './../assets/PensionRetirement.png'; 
import PensionCalculator from './PensionCalculator';
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

const PensionRetirement = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-black">Pension &</span>
            <span className="text-gray-200 ml-2">Retirement</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
              Pension and retirement services are financial programs designed to help individuals save and invest during their working years to ensure financial independence after retirement. These services typically include employer-sponsored retirement plans, individual retirement accounts (IRAs), annuities, and other savings vehicles. By contributing regularly, individuals build a retirement corpus that generates a steady income post-retirement. Pension plans are either defined-benefit, where the payout is predetermined, or defined-contribution, where the payout depends on the investment's performance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3"></h2>
              <p className="text-gray-600">
              Saving for retirement offers peace of mind and a safety net for unforeseen expenses like medical bills or inflation. Additionally, many pension schemes provide tax benefits during the accumulation phase, further enhancing their appeal. Proper retirement planning ensures a comfortable lifestyle, even when regular income ceases.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Example</h2>
              <p className="text-gray-600">
              John, a 35-year-old software engineer, started contributing $300 monthly to his employer's 401(k) plan. With a company match of 50% and an average annual return of 6%, John accumulated over $500,000 by the time he turned 60, ensuring a comfortable retirement.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src={Pension_Retirement}
              alt="Team meeting at Salted Stone"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
          </div>
          <PensionCalculator />
        </div>

        <div className="text-center mt-8">
          <CalculatorButton onClick={() => setIsCalculatorOpen(true)}>
            Open Pension Calculator
          </CalculatorButton>
        </div>

        <PensionCalculator 
          isOpen={isCalculatorOpen} 
          onClose={() => setIsCalculatorOpen(false)} 
        />
      </div>
    </div>
  );
};

export default PensionRetirement; 