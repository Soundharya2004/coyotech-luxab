import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Brain, Heart, Droplets } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Battery,
      title: 'Increasing Energy',
      description: 'Alkaline water boosts energy levels during physical activities, enhancing your daily performance.'
    },
    {
      icon: Droplets,
      title: 'Detoxification',
      description: 'Improves nutrient absorption by eliminating mucus in the colon wall for better health.'
    },
    {
      icon: Heart,
      title: 'Prevents Osteoporosis',
      description: 'Maintains healthy pH levels in your body to support strong and healthy bones.'
    },
    {
      icon: Brain,
      title: 'Improves Digestion',
      description: 'Prevents acid-related intestinal disorders for better digestive health.'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Benefits of LUXAB Water</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="water-card group"
            >
              <motion.div
                className="w-14 h-14 mb-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <benefit.icon className="w-7 h-7 text-blue-600" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;