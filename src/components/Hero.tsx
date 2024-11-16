import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GlassWater, Waves, Droplet } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const generateRandomDroplets = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 10 + Math.random() * 30,
      delay: Math.random() * 2,
    }));
  };

  const droplets = generateRandomDroplets(20);

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Animated Water Droplets */}
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="absolute pointer-events-none"
          initial={{ x: droplet.x, y: -50 }}
          animate={{
            y: window.innerHeight + 50,
            x: droplet.x + Math.sin(droplet.y) * 50,
          }}
          transition={{
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            delay: droplet.delay,
            ease: "linear"
          }}
        >
          <Droplet
            size={droplet.size}
            className="text-blue-400/20"
          />
        </motion.div>
      ))}

      {/* Mouse Follow Effect */}
      <motion.div
        className="water-ripple"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-6"
          >
            Experience Wellness with
            <span className="block">LUXAB Water</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover premium hydration solutions with enriched mineral content for a refreshing and invigorating experience.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="water-button group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <GlassWater className="w-5 h-5" />
              Hydrate Now!
            </span>
            <Waves className="absolute inset-0 w-full h-full text-white/20 animate-wave" />
          </motion.button>
        </div>

        {/* Water Wave Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Waves className="w-full h-full text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;