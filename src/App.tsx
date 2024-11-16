import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/banner';
import BentoGrid from './components/BentoGrid';
import Products from './components/Products';
import FAQ from './components/FAQ';
import { motion} from 'framer-motion';
import { ChevronRight } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
<br /><br /> <br /> 
      <Hero />
      <Banner />
      <BentoGrid />
      {/* Benefits Section */}
<section className="py-20 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Centered Heading */}
    <h2 className="text-3xl font-bold text-center text-black-700 mb-10">Benefits</h2>
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {[
        {
          title: 'Increasing Energy',
          description: 'Enhance your physical activities with alkaline water for significant effects.'
        },
        {
          title: 'Detoxification',
          description: 'Remove built-up toxins and improve nutrient absorption.'
        },
        {
          title: 'Better Digestion',
          description: 'Reduce acid-related disorders and improve digestive health.'
        }
      ].map((benefit, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4 text-blue-600">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <Products />
      {/* Latest Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Is the alkaline diet effective for weight loss?',
              'Health benefits of alkaline water',
              'Why do we need alkaline ionized water?'
            ].map((post, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{post}</h3>
                  <div className="flex items-center text-white">
                    <span>Read More</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LUXAB</h3>
              <p className="text-gray-400">Premium alkaline water for a healthier lifestyle.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat-Sun: Closed</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Dubai, United Arab Emirates</p>
              <p className="text-gray-400">+971 54 376 8080</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 LUXAB. All rights reserved.</p>
          </div>
        </div>
      </footer>
   

    </div>
  );
}

export default App;