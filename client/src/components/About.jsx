import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

// Get environment variables
const EMAIL_HOST = import.meta.env.VITE_EMAIL_HOST || 'localhost';
const EMAIL_PORT = import.meta.env.VITE_EMAIL_PORT || '3003';

const About = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`http://${EMAIL_HOST}:${EMAIL_PORT}/api/email/business`, {
        to: "leo@leonaidoo.com",
        subject: "New Business Query",
        templateData: {
          clientName: name || "Anonymous User",
          querySubject: message || "General Business Query",
          responseTime: "2 days"
        }
      });

      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message. We will get back to you soon!'
        });
        // Clear form
        setName('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">About</span>
            <span className="text-[#74767a] ml-2">Us</span>
          </h1>
        </div>
        {/* Map Section - Updated to the new address */}
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">On a Map</h2>
            <div className="bg-white p-2 rounded-xl shadow-sm">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.1290203374296!2d11.63389091570935!3d48.10638467922169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dd6c767a4d7a3%3A0x6c4a6bc11eaa4af3!2sThomas-Dehler-Stra%C3%9Fe%2015a%2C%2081737%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1717533100918!5m2!1sen!2sus"
                className="w-full h-[300px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                    {/* <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-[#774800]" />
                    <div>
                        <p className="font-medium text-gray-900">Feringastraße 10a</p>
                        <p className="text-gray-600">85774 Unterföhring, Germany</p>
                    </div>
                    </div> */}
                    
                    {/* New Address */}
                    <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-[#774800]" />
                    <div>
                        <p className="font-medium text-gray-900">Thomas-Dehler-Straße 15a</p>
                        <p className="text-gray-600">81737 München, Germany</p>
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
                Send us your query and we'll get back to you within 2 business days.
              </p>
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-4 mb-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#774800] focus:border-transparent"
                  required
                />
                <textarea
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#774800] focus:border-transparent"
                  required
                ></textarea>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#774800] text-white px-6 py-3 rounded-full font-medium 
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f9a53a]'} 
                    transition-colors`}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

