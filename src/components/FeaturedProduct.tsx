import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const product = {
    id: 1,
    name: 'Sparkling Water – 1500 ml',
    category: 'Category: Luxab sparkling water',
    price: 27.0,
    image: 'https://luxab.ae/wp-content/uploads/2024/11/12-pieces-pack-18.png',
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h3 className="text-3xl font-bold text-black-900">Featured Products</h3>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-lg overflow-hidden relative w-[300px] h-[400px]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform hover:scale-110"
          />
        </motion.div>

        {/* Product Details */}
        <div className="flex flex-col justify-center items-start space-y-4">
          <h3 className="text-3xl font-bold text-blue-900">{product.name}</h3>
          <p className="text-lg text-gray-600">{product.category}</p>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-blue-900">{product.price.toFixed(2)} AED</p>
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
