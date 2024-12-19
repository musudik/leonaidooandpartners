import ServiceImage from './../assets/Service.png';

const Home = () => {
  return (
    
    <div className="min-h-screen bg-[#f987008c] text-white p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-24">
        {/* Top Left Card */}
        <div className="bg-[#f987008c] rounded-2xl p-16">
          <img src="/proprint-logo.svg" alt="PROPRINT" className="h-6 mb-6" />
          <h2 className="text-4xl font-light mb-4">
            Where Innovation<br />
            Meets Humanity
          </h2>
          <p className="text-sm">
            Dedicated specialists bringing<br />
            advanced prosthetic solutions to life.
          </p>
          <div className="absolute top-4 right-4 text-sm">
            PROPRINT.IO
          </div>
        </div>

        {/* Top Right Card */}
        <div className="bg-[#f987008c] rounded-2xl p-6">
          <h2 className="text-4xl font-light">
            Prosthesis New<br />
            <span className="text-gray-500">Modeling Era</span>
          </h2>
        </div>

        {/* Middle Section - Icons */}
        <div className="col-span-1 md:col-span-2 py-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-4 h-4 bg-[#f987008c] rounded-full" />
              Scanning
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-4 h-4 bg-[#f987008c] rounded-full" />
              Printing
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800">
              <span className="w-4 h-4 bg-[#f987008c] rounded-full" />
              Assembly
            </div>
          </div>
          <h3 className="text-2xl mt-4">Shaping a Better Tomorrow</h3>
        </div>

        {/* Bottom Left - Logo */}
        <div className="bg-[#f987008c] rounded-2xl flex items-center justify-center p-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-2xl">P</span>
          </div>
        </div>

        {/* Bottom Center - Prosthetic Hand */}
        <div className="bg-[#f987008c] rounded-2xl">
          <img 
            src={ServiceImage} 
            alt="Prosthetic Hand with Flowers" 
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Bottom Right Card */}
        <div className="col-span-1 md:col-span-2 bg-[#f987008c] rounded-2xl p-6">
          <div className="flex justify-between items-start">
            <img src="/proprint-logo.svg" alt="PROPRINT" className="h-6" />
            <span className="text-sm">PROPRINT.IO</span>
          </div>
          <p className="text-sm mt-4">
            Specialists transforming<br />
            ideas into life-changing<br />
            solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;