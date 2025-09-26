import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const VirtualTour = () => {
  const tourData = [
    {
      id: 1,
      title: "Rumtek Monastery 360° Tour",
      description: "Explore the largest monastery in Sikkim with our immersive virtual tour",
      duration: "45 minutes",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Pemayangtse Monastery Walkthrough",
      description: "Discover ancient artifacts and traditional architecture",
      duration: "30 minutes",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Tashiding Monastery Sacred Spaces",
      description: "Experience the spiritual atmosphere of this sacred monastery",
      duration: "35 minutes",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Virtual Tours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience Sikkim's monasteries from anywhere in the world with our immersive 360° virtual tours
          </p>
        </motion.div>

        {/* Demo 360° Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-monastery-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-9a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">360° Virtual Tour Demo</h3>
                <p className="text-gray-600 mb-4">Click and drag to explore the monastery</p>
                <button className="bg-gradient-to-r from-monastery-gold to-yellow-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                  Start Tour
                </button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Available Tours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Available Virtual Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourData.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      �� Virtual Tour
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-monastery-gold transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {tour.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>⏱️ {tour.duration}</span>
                      <span>📊 {tour.difficulty}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualTour;