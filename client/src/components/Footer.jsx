import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, MessageCircle, Instagram } from 'lucide-react';

const Footer = ({ className }) => {
  return (
    <footer className={`bg-[#212121] text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Product Search */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sm">Subscribe to our newsletter</h3>
            <form className="space-y-4">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  className="bg-white/10 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-[#f987008c]"
                />
                <button className="bg-[#f987008c] px-4 py-1 rounded hover:bg-[#f98700] transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEED HELP?</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm">Call Us:</p>
                <a href="tel:+4917647757767" className="text-[#f987008c] hover:text-[#f98700]">
                    +49 176 47757767
                </a>
              </div>
              <div>
                <p className="text-sm">General Inquiries</p>
                <a href="mailto:info@leonaidoo.com" className="text-[#f987008c] hover:text-[#f98700]">
                  info@leonaidoo.com
                </a>
              </div>
              <div>
                <p className="text-sm">Careers</p>
                <a href="/careers" className="text-[#f987008c] hover:text-[#f98700]">
                  Join Our Team
                </a>
              </div>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONNECT WITH US</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100017731290446" className="text-white hover:text-[#f987008c]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-[#f987008c]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/leonaidoo_official?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="text-white hover:text-[#f987008c]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-[#f987008c]">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=4917647757767&text&type=phone_number&app_absent=0" className="text-white hover:text-[#f987008c]">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-white/10 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-4">
            </nav>
            <nav className="flex flex-wrap gap-4 text-gray-600">
              <span>© 2024 leonaidoo.com All Rights Reserved.</span>
              <Link to="/privacy" className="hover:text-[#f987008c]">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#f987008c]">Terms of Use</Link>
              <Link to="/conditions" className="hover:text-[#f987008c]">Terms & Conditions</Link>
            </nav>
            <div className="flex flex-wrap gap-2 text-sm">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 