import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { monasteryData } from '../data/dummyData';
import Card from '../components/Card';

const Home = () => {
  const features = [
    {
      title: "Virtual Tours",
      description: "Experience 360° monastery walkthroughs",
      icon: "��️",
      link: "/virtual-tour",
      color: "from-monastery-gold to-yellow-400"
    },
    {
      title: "Cultural Calendar",
      description: "Discover festivals and events",
      icon: "📅",
      link: "/cultural-calendar",
      color: "from-monastery-red to-red-400"
    },
    {
      title: "Interactive Map",
      description: "Navigate monasteries and attractions",
      icon: "🗺️",
      link: "/interactive-map",
      color: "from-monastery-blue to-blue-400"
    },
    {
      title: "Digital Archive",
      description: "Explore manuscripts and recordings",
      icon: "📚",
      link: "/digital-archive",
      color: "from-monastery-green to-green-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sikkim Monastery
            <span className="block text-monastery-gold">Digital Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Preserving centuries of Buddhist culture through immersive digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/virtual-tour"
              className="bg-gradient-to-r from-monastery-gold to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Start Virtual Tour
            </Link>
            <Link
              to="/cultural-calendar"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all"
            >
              View Calendar
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explore Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the rich heritage of Sikkim's monasteries through our comprehensive digital platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link to={feature.link}>
                  <Card className="h-full p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-monastery-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Monasteries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Monasteries
            </h2>
            <p className="text-xl text-gray-600">
              Discover the most significant monasteries in Sikkim
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monasteryData.slice(0, 3).map((monastery, index) => (
              <motion.div
                key={monastery.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative">
                    <img
                      src={monastery.image}
                      alt={monastery.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ {monastery.rating}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {monastery.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {monastery.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>�� {monastery.location}</span>
                      <span>👥 {monastery.visitors.toLocaleString()}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;