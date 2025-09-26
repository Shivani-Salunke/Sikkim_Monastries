import React from 'react';
import { motion } from 'framer-motion';
import { eventsData } from '../data/dummyData';
import Card from '../components/Card';

const CulturalCalendar = () => {
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
            Cultural Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover upcoming festivals, events, and cultural celebrations at Sikkim's monasteries
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    ₹{event.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-monastery-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <span className="font-medium">📅</span>
                      <span className="ml-2">{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">⏰</span>
                      <span className="ml-2">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">📍</span>
                      <span className="ml-2">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      {event.available} of {event.capacity} spots available
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-monastery-gold to-yellow-500 text-white py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                    Book Now
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;