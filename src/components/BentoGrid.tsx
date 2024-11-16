import { motion } from 'framer-motion';

const BentoGrid = () => {
  const images = [
    'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-11-600x600.png',
    'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-12-600x600.png',
    'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-10-600x600.png',
    'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-13-600x600.png',
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-center text-black mb-10">Featured Products</h2>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold">12 Pieces Pack</p>
                <p>11.00 AED</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
