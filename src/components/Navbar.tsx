import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Youtube, Facebook, Instagram, Twitter, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Gallery', path: '/gallery' },
    { name: 'Checkout', path: '/checkout' },
    { name: 'Water', path: '/water' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
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

            {/* Center Section - Logo */}
            <div className="flex justify-center items-center">
              <img
                src="https://luxab.ae/wp-content/uploads/2024/10/IMG_7683.jpg"
                alt="LUXAB"
                className="h-10"
              />
            </div>

            {/* Right Section - Cart */}
            <div className="flex items-center">
              <motion.div whileHover={{ scale: 1.1 }} className="relative mr-4">
                <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  0
                </span>
              </motion.div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none md:hidden"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Menu for Larger Screens */}
      <nav className="hidden md:block sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2">
            <div className="flex items-center justify-center space-x-6">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile Screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="block md:hidden bg-white shadow-md z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="block text-gray-700 hover:text-blue-600 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
