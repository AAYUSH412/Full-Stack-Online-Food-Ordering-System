import React from 'react';
import { motion } from 'framer-motion';
import { Users, Truck, Heart, Star, Clock, Shield } from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div
      className="min-h-screen "
      style={{ 
        backgroundColor: 'rgba(65, 88, 208, 0.1)',
        backgroundImage: 'linear-gradient(43deg, rgba(65, 88, 208, 0.2) 0%, rgba(200, 80, 192, 0.2) 46%, rgba(255, 204, 112, 0.2) 100%)'
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 py-16 lg:pt-40 sm:pt-52"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={fadeIn}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to BiteBuddy
          </h1>
          <p className="text-xl text-gray-600">
            Your go-to companion for effortless food ordering
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section className="mb-16" variants={fadeIn}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed">
              To make food ordering effortless, enjoyable, and accessible for everyone. By
              connecting users with a diverse range of restaurants and cuisines, we're here to
              satisfy every craving while supporting local businesses and fostering a sustainable
              ecosystem.
            </p>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
        >
          {[
            { icon: Users, title: "User-Centric", text: "Simple, fast, and efficient ordering" },
            { icon: Truck, title: "Fast Delivery", text: "Real-time tracking and updates" },
            { icon: Heart, title: "Local Support", text: "Empowering local businesses" },
            { icon: Star, title: "Quality First", text: "Premium dining experience" },
            { icon: Clock, title: "24/7 Service", text: "Always here when you need us" },
            { icon: Shield, title: "Secure Platform", text: "Safe and reliable transactions" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.section className="mb-16" variants={fadeIn}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: "2025", text: "BiteBuddy launched with seamless menu browsing and smart authentication" },
              { year: "2026", text: "Introducing health-focused filters and loyalty rewards" },
              { year: "2027", text: "Implementing AI-based meal plans and voice assistance" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-24 font-bold text-purple-600">
                  {milestone.year}
                </div>
                <div className="flex-grow bg-white/80 backdrop-blur-sm rounded-lg shadow p-4">
                  {milestone.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        
      </motion.div>
    </div>
  );
};

export default AboutUs;