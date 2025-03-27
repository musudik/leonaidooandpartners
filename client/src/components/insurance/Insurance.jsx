import React from 'react';
import styled from 'styled-components';
import Insurance_Image from '../../assets/Insurance_All.jpg'; // You'll need to add this image to your assets
import WhatsAppButton from '../common/WhatsAppButton';
import { Link } from 'react-router-dom';

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

const InsuranceCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  h3 {
    color: #774800;
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 1.25rem;
  }
  
  p {
    color: #4b5563;
    line-height: 1.6;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: #774800;
  font-weight: 600;
  margin-top: 0.75rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Insurance = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Comprehensive</span>
                <span className="text-[#74767a] ml-2">Insurance</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Protection for Every Aspect of Your Life in Germany</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    At Leonaidoo and Partners, we specialize in providing comprehensive insurance solutions that protect you, your family, and your assets from life's unexpected challenges. Navigating the German insurance landscape can be complex, but our expert advisors simplify the process, ensuring you have the right coverage at competitive rates.
                  </p>
                  <p className="text-gray-600">
                    Whether you're looking for car insurance, health insurance, disability protection, or liability coverage, we tailor insurance packages to your specific needs and circumstances, making sure you're never left vulnerable.
                  </p>
                </div>

                {/* Insurance Types */}
                <div className="space-y-6">
                  <InsuranceCard>
                    <h3>Car Insurance (KFZ-Versicherung)</h3>
                    <p>
                      Car insurance is designed to protect individuals and their vehicles from financial losses resulting from accidents, theft, vandalism, and other unforeseen events. It covers the costs associated with repairing or replacing damaged vehicles, as well as medical expenses for injured parties. Car insurance also provides liability protection, ensuring that you're not held financially responsible for damages caused to others.
                    </p>
                    <StyledLink to="/insurance/car">Learn more about our Car Insurance options</StyledLink>
                  </InsuranceCard>

                  <InsuranceCard>
                    <h3>Disability Insurance (Berufsunfähigkeitsversicherung)</h3>
                    <p>
                      Disability insurance provides a regular income to help cover living expenses and medical costs when you're unable to work due to a disability. It offers crucial financial protection, ensuring you can maintain your standard of living even when you can't earn an income. In Germany, where state benefits may be limited, private disability insurance is essential for comprehensive financial security.
                    </p>
                    <StyledLink to="/insurance/disability">Learn more about our Disability Insurance options</StyledLink>
                  </InsuranceCard>

                  <InsuranceCard>
                    <h3>Health Insurance (Krankenversicherung)</h3>
                    <p>
                      Health insurance covers the costs associated with medical treatments, hospital stays, and prescription medications. In Germany, having health insurance is mandatory. We help you navigate between public (gesetzliche) and private (private) health insurance options to find the coverage that best suits your needs, ensuring you have access to high-quality healthcare services without financial worry.
                    </p>
                    <StyledLink to="/insurance/health">Learn more about our Health Insurance options</StyledLink>
                  </InsuranceCard>

                  <InsuranceCard>
                    <h3>Liability Insurance (Haftpflichtversicherung)</h3>
                    <p>
                      Liability insurance protects you from financial losses resulting from accidents, injuries, or damages caused to others. It covers the costs associated with repairing or replacing damaged property, medical expenses for injured parties, and provides coverage for legal defense and settlements. In Germany, personal liability insurance is considered essential, as you can be held personally responsible for damages you cause.
                    </p>
                    <StyledLink to="/insurance/liability">Learn more about our Liability Insurance options</StyledLink>
                  </InsuranceCard>
                </div>


                
              </div>

              {/* Right Column - Image and Additional Insurance Types */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Insurance_Image}
                    alt="Insurance Protection"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                <div className="space-y-6 mt-8">
                  

                  {/* Why Choose Us Section */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Why Choose Our Insurance Solutions?</h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Independent advice across multiple insurance providers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Tailored coverage to your specific needs and budget</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Expert support for claims and policy adjustments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#774800] mr-2">✔️</span>
                        <span>Multilingual service for international clients</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Button onClick={() => window.location.href = '/contact'}>
                    Get Insurance Consultation
                  </Button>
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

export default Insurance; 