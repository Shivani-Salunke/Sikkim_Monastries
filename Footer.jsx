import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-monastery-gold to-monastery-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Sikkim Monasteries</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Preserving and showcasing the rich cultural heritage of Sikkim's monasteries through digital innovation and sustainable tourism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/virtual-tour" className="text-gray-300 hover:text-monastery-gold transition-colors">Virtual Tours</Link></li>
              <li><Link to="/cultural-calendar" className="text-gray-300 hover:text-monastery-gold transition-colors">Cultural Calendar</Link></li>
              <li><Link to="/interactive-map" className="text-gray-300 hover:text-monastery-gold transition-colors">Interactive Map</Link></li>
              <li><Link to="/digital-archive" className="text-gray-300 hover:text-monastery-gold transition-colors">Digital Archive</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Gangtok, Sikkim</p>
              <p>+91 9876543210</p>
              <p>info@sikkimmonasteries.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sikkim Monastery Digital Heritage Platform. All rights reserved.</p>
          <p className="mt-2 text-sm">Smart India Hackathon 2024 Project</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;