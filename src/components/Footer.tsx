import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/WhatsApp Image 2025-06-28 at 23.51.12_11829941.jpg" 
                alt="JJ Tech Solutions" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold">JJ Tech Solutions</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Your trusted partner for intelligent digital solutions. Specializing in AI, 
              web development, and data-driven applications that drive business growth.
            </p>
            <div className="text-sm text-gray-500">
              © 2024 JJ Tech Solutions. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                <a href="mailto:jjtechsolu@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  jjtechsolu@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                <a href="tel:+918329087516" className="text-gray-400 hover:text-white transition-colors">
                  +91 8329087516
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">Based in India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Jaid Ali Shaikh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;