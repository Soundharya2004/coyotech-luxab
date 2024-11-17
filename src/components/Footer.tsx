import { motion } from "framer-motion"; 
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LUXAB Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXAB</h3>
            <p className="text-gray-400 mb-4">
              Premium alkaline water for a healthier lifestyle.
            </p>
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
            Employment Form
            </span>
          </motion.button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#shipping" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#cart" className="text-gray-400 hover:text-white">Cart</a></li>
              <li><a href="#shop" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#account" className="text-gray-400 hover:text-white">Account</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
              <li><a href="#checkout" className="text-gray-400 hover:text-white">Checkout</a></li>
              <li><a href="#water" className="text-gray-400 hover:text-white">Water</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat-Sun: Closed</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Plot No. 405, 4th Floor, West Wing</p>
            <p className="text-gray-400">Latifa Tower, Sheikh Zayed Road</p>
            <p className="text-gray-400">Dubai, United Arab Emirates</p>
            <p className="text-gray-400 mt-4">+971 54 376 8080</p>
            <p className="text-gray-400">+971 4 384 1000</p>
            <p className="text-gray-400 mt-4">Info@luxab.ae</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 COYOTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
