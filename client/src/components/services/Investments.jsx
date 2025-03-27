import React from 'react';
import styled from 'styled-components';
import Investment_Image from '../../assets/Investment.jpg'; // You'll need to add this image
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

const Investments = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Smart Cash</span>
                <span className="text-[#74767a] ml-2">Investments</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Tax-Saving Investment Plans in Germany</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo and Partners, we help you make the most of your money by strategically investing in cash investment plans that not only grow your wealth but also reduce your tax burden. Germany offers various tax-optimized investment opportunities, and our experts guide you in choosing the right solutions tailored to your financial goals.
                  </p>
                </div>

                {/* Why Choose Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Tax-Efficient Cash Investments?</h3>
                  <p className="text-gray-600 mb-4">
                    Germany has a structured tax system that allows individuals and businesses to benefit from smart investment strategies. By leveraging tax-advantaged cash investment plans, you can:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✅</span>
                      <span>Reduce your taxable income</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✅</span>
                      <span>Maximize state incentives and subsidies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✅</span>
                      <span>Secure higher returns with optimized tax treatment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2">✅</span>
                      <span>Build long-term financial stability</span>
                    </li>
                  </ul>
                </div>

                {/* Investment Solutions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#774800] mb-3">Our Tax-Saving Investment Solutions</h3>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">1. Riester Rente – State-Supported Retirement Plan</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">Get government bonuses and tax deductions</li>
                      <li className="text-gray-600">Ideal for employees and families</li>
                      <li className="text-gray-600">Contribute now and enjoy tax benefits immediately</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">2. Real Estate Investments with Tax Perks</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">Invest in rental properties with depreciation benefits</li>
                      <li className="text-gray-600">Finance with minimal capital and deduct interest payments</li>
                      <li className="text-gray-600">Offset rental income with allowable expenses</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">3. Private Pension Plans (Rürup-Rente & Company Pensions)</h4>
                    <ul className="list-none space-y-1 ml-6">
                      <li className="text-gray-600">Secure a tax-free retirement income</li>
                      <li className="text-gray-600">Benefit from up to 100% tax deductions on contributions</li>
                      <li className="text-gray-600">Protect your wealth for the future</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Schedule a Free Consultation
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Services */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Investment_Image}
                    alt="Tax-Efficient Investments"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* Additional Investment Solutions */}
                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">4. Investment Funds & Capital Gains Optimization</h4>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Leverage tax-free allowances on capital gains</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Use ETF and index funds with tax-efficient structures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Reinvest earnings and defer taxes</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#774800] mb-2">5. Business Investments & Tax Optimization</h4>
                    <ul className="list-none space-y-1">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Set up a GmbH or Holding structure for tax advantages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Optimize profits with low-tax corporate accounts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">•</span>
                        <span>Reinvest within the company for strategic wealth growth</span>
                      </li>
                    </ul>
                  </div>

                  {/* Who Can Benefit Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Who Can Benefit?</h3>
                    <p className="text-gray-600 mb-4">
                      Our tax-saving cash investment plans are ideal for:
                    </p>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Employees looking for tax-efficient savings</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Business owners optimizing profits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>High-income earners reducing tax liabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔</span>
                        <span>Expats and investors seeking legal tax advantages</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      Start saving on taxes today! At Leonaidoo and Partners, we specialize in tailor-made tax strategies that fit your unique financial situation.
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

export default Investments; 