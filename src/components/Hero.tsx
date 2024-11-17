import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassWater, Droplet } from "lucide-react";

const Hero = () => {
  const [MousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const generateRandomDroplets = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 10 + Math.random() * 20,
      delay: Math.random() * 2,
    }));
  };

  const droplets = generateRandomDroplets(10); // Reduced the number of droplets

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
            x: droplet.x + Math.sin(droplet.y) * 30,
          }}
          transition={{
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            delay: droplet.delay,
            ease: "linear",
          }}
        >
          <Droplet
            size={droplet.size}
            className="text-blue-400/20"
          />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-black">Experience Wellness with</span>{" "}
            <span className="text-blue-600">LUXAB</span>{" "}
            <span className="text-black">Water</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto"
          >
            Discover premium hydration solutions with enriched mineral content for a refreshing and invigorating experience
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            اكتشف حلول الترطيب الممتازة بمحتوى معدني غني لتجربة منعشة ومنشطة
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4 }}
            className="water-button group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <GlassWater className="w-5 h-5" />
              Hydrate Now!
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
