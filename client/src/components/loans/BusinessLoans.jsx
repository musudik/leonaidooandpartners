import React from 'react';

const BusinessLoans = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Business</span>
            <span className="text-[#74767a] ml-2">Loans</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
              Business loans are financial products designed to help businesses grow and operate more efficiently. These loans can be used for various purposes, such as purchasing equipment, expanding operations, or covering unexpected expenses. Business loans typically require collateral, such as assets like property or equipment, and may have fixed or variable interest rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoans; 