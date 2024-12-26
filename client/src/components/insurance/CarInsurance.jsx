import React from 'react';

const CarInsurance = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Car</span>
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
                Car insurance is a type of insurance policy designed to protect individuals and their vehicles from financial losses resulting from accidents, theft, vandalism, and other unforeseen events. It covers the costs associated with repairing or replacing damaged vehicles, as well as medical expenses for injured parties. Car insurance also provides liability protection, ensuring that the policyholder is not held financially responsible for damages caused to others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsurance; 