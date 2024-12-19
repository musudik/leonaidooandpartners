import { useState } from 'react';
import Pension_Retirement from './../assets/Pension_Retirement.png';

const PensionRetirement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#fbfbfb94] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pension & Retirement
          </h1>
          <p className="text-gray-700 mb-6">
            Planning for your retirement is one of the most important financial steps you can take to secure your future. At our financial coaching service, we specialize in creating customized pension and retirement strategies tailored to your unique lifestyle goals. Whether you’re just starting to save, are midway through your career, or nearing retirement, we offer expert advice to maximize your savings and investments.
          </p>
          <p className="text-gray-700 mb-6">
            We analyze your current financial standing, future aspirations, and market trends to build a robust retirement plan. From pensions and annuities to long-term investment vehicles, we ensure your golden years are stress-free and financially secure. Don’t leave your future to chance—connect with us today for a personalized consultation.
          </p>
          <button className="bg-[#f9b44a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f9a53a] transition-colors">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src={Pension_Retirement}
            alt="Pension and Retirement"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PensionRetirement; 