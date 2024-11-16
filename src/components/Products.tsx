import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, GlassWater, Droplets } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '12 Pieces Pack (11)',
      price: 11.00,
      image: 'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-11-600x600.png'
    },
    {
      id: 2,
      name: '12 Pieces Pack (12)',
      price: 12.00,
      image: 'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-12-600x600.png'
    },
    {
      id: 3,
      name: '12 Pieces Pack (10)',
      price: 10.00,
      image: 'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-10-600x600.png'
    },
    {
      id: 4,
      name: '12 Pieces Pack (13)',
      price: 13.00,
      image: 'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-13-600x600.png'
    }
  ];

  const backgroundIcons = Array(15).fill(null);

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Parallax Background Icons */}
      {backgroundIcons.map((_, index) => (
        <motion.div
          key={index}
          className="absolute opacity-5"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        >
          {index % 2 === 0 ? 
            <GlassWater size={30 + Math.random() * 40} /> : 
            <Droplets size={30 + Math.random() * 40} />
          }
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Products</h2>
          <p className="text-gray-600">Discover our most popular premium water selections</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg overflow-hidden"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="water-button flex items-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-blue-600 font-bold mt-2">{product.price.toFixed(2)} AED</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;