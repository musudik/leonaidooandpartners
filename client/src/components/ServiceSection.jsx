import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.div`
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
  font-weight: 600;
  margin-top: 2rem;
  
  &:hover {
    background: #8b5500;
  }
`;

const ServiceSection = () => {
  return (
    <SectionWrapper>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mt-16">
              <h3 className="text-6xl font-black mb-2">
                <span className="text-[#774800]">Leonaidoo </span>
                <span className="text-[#74767a] ml-2">& Partners</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-2">
              <b>
                <span className="text-[#774800]">
                  <h2>Your Gateway to Generational Wealth in Germany</h2> 
                </span>
              </b>
              <p>At Leonaidoo & Partners, we don't just sell financial products—we craft personalized wealth-building 
              strategies designed to create sustainable, multi-generational financial growth. Our approach is 
              rooted in Germany's powerful tax benefits and investment programs, ensuring that every euro you 
              earn and invest works to maximize your wealth potential.</p>
              <h2 className="text-xl md:text-2xl text-gray-600 mt-6">
                Building Lasting Wealth with Smart Strategies & Tax Benefits
              </h2>
            </p>
          {/* Why Most People Fail */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#774800] mb-6">
              Why Most People Fail at Wealth Building
            </h3>
            <p className="text-gray-600 mb-4">
              Many people assume that accumulating wealth is about simply earning more or saving aggressively. 
              But in Germany, true financial success is about leveraging the system to your advantage. Without the right strategy, you might:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Overpay taxes, losing a significant portion of your wealth every year.</li>
              <li>Miss out on state incentives and government-backed investment opportunities.</li>
              <li>Invest in the wrong products without a clear long-term vision.</li>
              <li>Fail to create a structured financial plan, leaving money on the table.</li>
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#774800] mb-6">
              Our Expertise: A One-Stop-Shop for Financial Growth
            </h3>
            <p className="text-gray-600 mb-6">
              Unlike traditional brokers who push ad-hoc financial products, our team at Leonaidoo & Partners acts 
              as your personal wealth architects. We focus on holistic financial planning by combining multiple 
              wealth-building pillars, such as:
            </p>

            {/* Real Estate Investments */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#774800] mb-3">
                1. Smart Real Estate Investments
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Leverage real estate as a tax-efficient wealth builder</li>
                <li>Buy properties with zero down payment and no additional side costs</li>
                <li>Refinance existing loans to free up capital for new investments</li>
                <li>Generate passive income through rental yield optimization</li>
              </ul>
            </div>

            {/* Tax Optimization */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#774800] mb-3">
                2. Tax Optimization Strategies
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Reduce taxable income through real estate depreciation, business structures, and investment tax benefits</li>
                <li>Claim all available tax deductions to minimize liabilities</li>
                <li>Use state-supported pension plans to secure tax-free wealth growth</li>
              </ul>
            </div>

            {/* Business Solutions */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#774800] mb-3">
                3. Business & Self-Employment Solutions
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Turn your business into a tax-saving vehicle</li>
                <li>Maximize deductions on business expenses</li>
                <li>Leverage Germany's GmbH and Holding structures for tax-efficient scaling</li>
              </ul>
            </div>

            {/* State-Backed Programs */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#774800] mb-3">
                4. State-Backed Investment & Pension Programs
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Riester-Rente & Rürup-Rente – Build retirement wealth with government bonuses</li>
                <li>Company pension schemes – Maximize employer contributions and tax benefits</li>
                <li>Private pension plans with tax advantages</li>
              </ul>
            </div>

            {/* Wealth Protection */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-[#774800] mb-3">
                5. Wealth Protection & Legacy Planning
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Protect your assets legally to ensure generational wealth transfer</li>
                <li>Use trusts and family holding structures to pass on wealth tax-efficiently</li>
                <li>Optimize inheritance tax planning to secure your family's future</li>
              </ul>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#774800] mb-6">
              Why Work With Leonaidoo & Partners?
            </h3>
            <p className="text-gray-600 mb-6">
              Germany's financial landscape is complex, and making the wrong move can cost you thousands 
              in missed opportunities. That's why working with experienced wealth coaches, rather than 
              ordinary financial brokers, is critical.
            </p>
            <h4 className="text-xl font-bold mb-4">What sets us apart?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-[#774800] font-bold mr-2">✅</span>
                <span><strong>Tailored wealth strategies</strong> – Not just products, but comprehensive financial plans.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#774800] font-bold mr-2">✅</span>
                <span><strong>Proven real estate and tax solutions</strong> – Tested by our own successful investments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#774800] font-bold mr-2">✅</span>
                <span><strong>Access to exclusive investment opportunities</strong> – Beyond what traditional advisors offer.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#774800] font-bold mr-2">✅</span>
                <span><strong>A long-term partnership</strong> – We grow your wealth with you, for life.</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#774800] mb-6">
              Take Control of Your Financial Future Today
            </h3>
            <p className="text-gray-600 mb-8">
              The time to build wealth isn't tomorrow! it's NOW. Let's create a strategy that maximizes 
              your income, investments, and tax advantages, ensuring you and your family enjoy financial 
              freedom for generations to come.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServiceSection; 