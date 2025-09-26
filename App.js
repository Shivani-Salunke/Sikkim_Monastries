import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VirtualTour from './pages/VirtualTour';
import CulturalCalendar from './pages/CulturalCalendar';
import InteractiveMap from './pages/InteractiveMap';
import DigitalArchive from './pages/DigitalArchive';
import Community from './pages/Community';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-20"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/cultural-calendar" element={<CulturalCalendar />} />
            <Route path="/interactive-map" element={<InteractiveMap />} />
            <Route path="/digital-archive" element={<DigitalArchive />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;