import React from 'react';

const DisabilityInsurance = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Disability</span>
            <span className="text-[#74767a] ml-2">Insurance</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
                 Disability insurance  is a type of insurance policy designed to protect individuals from financial losses resulting from disabilities. It provides a regular income to help cover living expenses and medical costs when an individual is unable to work due to a disability. Disability insurance can be either voluntary or mandatory, depending on the employer. It is designed to protect individuals from financial hardship when they are unable to work due to a disability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisabilityInsurance; 