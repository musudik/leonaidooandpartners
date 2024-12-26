import React from 'react';

const HealthInsurance = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Health</span>
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
              Health insurance is a type of insurance policy designed to protect individuals and their health from financial losses resulting from illnesses, injuries, and other health-related events. It covers the costs associated with medical treatments, hospital stays, and prescription medications. Health insurance also provides coverage for preventive care, such as regular checkups and screenings, to help maintain good health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance; 