import { motion } from "framer-motion";

const LuxabSection = () => {
  const minerals = [
    { id: 1, name: "Magnesium MG" },
    { id: 2, name: "Calcium CA" },
    { id: 3, name: "Potassium K" },
    { id: 4, name: "Sodium NA" },
  ];

  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        LUXAB to the health of the family
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        UXAB alkaline water is healthy and clear water, rich in mineral salts and strong
        antioxidants, which, due to its molecular structure, provides multiple hydration to the
        cells.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {minerals.map((mineral) => (
          <motion.button
            key={mineral.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-600 transition-all duration-300"
          >
            {mineral.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LuxabSection;
