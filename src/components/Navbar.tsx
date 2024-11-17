import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Youtube, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shipping', path: '/shipping' },
    { name: 'Cart', path: '/cart' },
    { name: 'Shop', path: '/shop' },
    { name: 'Account', path: '/account' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-2 md:justify-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://luxab.ae/wp-content/uploads/2024/10/IMG_7683.jpg"
              alt="LUXAB"
              className="h-10"
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex justify-center py-2`}
        >
          <motion.div
            className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md text-sm font-medium relative group"
              >
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center py-2">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              {/* Social Links */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#youtube"
                className="text-gray-600 hover:text-red-600"
              >
                <Youtube size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#facebook"
                className="text-gray-600 hover:text-blue-600"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#instagram"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#twitter"
                className="text-gray-600 hover:text-blue-400"
              >
                <Twitter size={18} />
              </motion.a>
            </div>

            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                0
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}
