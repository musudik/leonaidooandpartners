import React from 'react';

const SponsoredEvents = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Sponsored</span>
            <span className="text-[#74767a] ml-2">Events</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
                Here are the list of events sponsored by us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredEvents; 