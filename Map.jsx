import React from 'react';
import { motion } from 'framer-motion';

const Map = ({ monasteries = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl overflow-hidden relative"
    >
      {/* Dummy Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Monastery Markers */}
      {monasteries.map((monastery, index) => (
        <motion.div
          key={monastery.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="absolute"
          style={{
            left: `${20 + (index * 25)}%`,
            top: `${30 + (index * 15)}%`
          }}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <div className="w-full h-full bg-yellow-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
              {monastery.name}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <button className="bg-white p-2 rounded shadow-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="bg-white p-2 rounded shadow-lg hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m16 0l-4-4m4 4l-4 4" />
          </svg>
        </button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h4 className="font-semibold text-sm mb-2">Legend</h4>
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <span>Monasteries</span>
        </div>
        <div className="flex items-center space-x-2 text-xs mt-1">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span>Attractions</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Map;