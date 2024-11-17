import { motion } from "framer-motion";
import { GlassWater } from "lucide-react";

const LuxabHighlightSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left pl-4 lg:pl-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 leading-tight">
            Discover the Refreshment <br /> of LUXAB Alkaline Water
          </h2>
          <p className="text-gray-600 mb-6">
            Enjoy our mineral-rich water that revitalizes and energizes. Taste the purity of LUXAB for a refreshing experience.
          </p>
          <ul className="text-gray-600 space-y-2 mb-8">
            <li>• Premium Hydration Solutions</li>
            <li>• Enriched Mineral Content</li>
            <li>• Refreshing and Invigorating</li>
            <li>• Rejuvenate and Revitalize</li>
            <li>• Boost Your Vitality</li>
          </ul>
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

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-center">
          <div className="relative">
            <img
              src="https://luxab.ae/wp-content/uploads/2024/10/luxab.jpg"
              alt="LUXAB"
              className="rounded-lg shadow-lg max-w-md"
            />
            <div className="absolute inset-0 border-4 border-purple-500 rounded-lg pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxabHighlightSection;
