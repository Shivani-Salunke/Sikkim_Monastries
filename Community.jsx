import React from 'react';
import { motion } from 'framer-motion';
import { communityData } from '../data/dummyData';
import Card from '../components/Card';

const Community = () => {
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
            Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with local guides, artisans, and cultural experts
          </p>
        </motion.div>

        {/* Community Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-monastery-gold text-white px-2 py-1 rounded-full text-xs font-medium">
                      ⭐ {member.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-monastery-gold transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-monastery-blue font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.monastery}</p>
                  <p className="text-gray-500 text-xs mb-4">{member.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <button className="w-full bg-gradient-to-r from-monastery-gold to-yellow-500 text-white py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                    Contact
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

export default Community;