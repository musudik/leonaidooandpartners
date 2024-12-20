import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import servicesImg from '../assets/Services-c2.png'; // Add your profile image
import Badenia from '../assets/partners/Badenia.png';
import DeutscheBank from '../assets/partners/DeutscheBank.jpeg';
import DVAG from '../assets/partners/DVAG.png';
import Geiger from '../assets/partners/Geiger.png';
import prohyp from '../assets/partners/prohyp.png';
import hero1 from '../assets/Hero1.jpg';


const Profile = () => {
  return (
    <div className="page-container bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <div class="hero-image">
            <img src={hero1} alt="Hero" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Contact
            </h1>
            <p className="text-gray-600 mb-8">
              We're here to help and answer any question you might have. We look forward to hearing from you. Feel free to reach out to us anytime, we'll get back to you as soon as possible.
            </p>
            <button className="bg-[#774800] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f9a53a] transition-colors">
              GET CONTACT
            </button>
          </div>
          <div className="relative">
            <img 
              width="500px"
              height="500px"
              src={servicesImg} 
              alt="Profile" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <img src={Badenia} alt="Partner" className="h-8 opacity-90 hover:opacity-100 transition-opacity" />
            <img src={DeutscheBank} alt="Partner" className="h-14 opacity-90 hover:opacity-100 transition-opacity" />
            <img src={DVAG} alt="Partner" className="h-8 opacity-90 hover:opacity-100 transition-opacity" />
            <img src={Geiger} alt="Partner" className="h-8 opacity-90 hover:opacity-100 transition-opacity" />
            <img src={prohyp} alt="Partner" className="h-8 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Address</h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-[#774800]" />
                  <div>
                    <p className="font-medium text-gray-900">Feringastraße 10a</p>
                    <p className="text-gray-600">85774 Unterföhring, Germany</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mt-6 mb-4">Online</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#774800]" />
                    <p className="text-gray-600">+49 176 47757767</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#774800]" />
                    <p className="text-gray-600">leo@leonaidoo.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">On a Map</h2>
              <div className="bg-white p-2 rounded-xl shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.477536778437!2d11.631706612809703!3d48.17814997112794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e74e5786ed277%3A0xe681d1f5f4a2624d!2sFeringastra%C3%9Fe%2010A%2C%2085774%20Unterf%C3%B6hring%2C%20Germany!5e0!3m2!1sen!2sus!4v1734600856447!5m2!1sen!2sus"
                  className="w-full h-[300px] rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Contact Form */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What Can We Offer For Your Business
            </h2>
            <p className="text-gray-600 mb-8">
              Send us text. Click to select the text box. Click again or double click to start editing the text.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#774800] focus:border-transparent"
              />
              <textarea
                placeholder="Enter your message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#774800] focus:border-transparent"
              ></textarea>
              <button className="bg-[#774800] text-white px-6 py-3 rounded-full font-medium hover:bg-[#f9a53a] transition-colors">
                SUBMIT
              </button>
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;