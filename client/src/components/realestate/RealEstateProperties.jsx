// import React, { useState } from 'react';
// import SelfDisclosureForm from './SelfDisclosureForm';

// const RealEstateProperties = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   return (
//     <div className="bg-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         {/* Header Section */}
//         <div className="mt-16">
//           <h1 className="text-6xl font-black mb-4">
//             <span className="text-[#774800]">Real Estate</span>
//             <span className="text-[#74767a] ml-2">Properties</span>
//           </h1>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//           {/* Left Column - Text Content */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-xl font-bold mb-3">Description</h2>
//               <p className="text-gray-600 mb-6">
//                 Here are some of the RealEstate Properties we have available.
//               </p>
//               <button
//                 onClick={() => setIsFormOpen(true)}
//                 className="bg-[#774800] text-white px-6 py-3 rounded-lg hover:bg-[#8b5500] transition-colors"
//               >
//                 Submit Self-Disclosure Form
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Image or Additional Content */}
//           <div>
//             {/* Add property listings or images here */}
//           </div>
//         </div>
//       </div>

//       {/* Self-Disclosure Form Modal */}
//       <SelfDisclosureForm 
//         isOpen={isFormOpen}
//         onClose={() => setIsFormOpen(false)}
//       />
//     </div>
//   );
// };

// export default RealEstateProperties;
