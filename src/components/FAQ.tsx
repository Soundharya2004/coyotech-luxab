import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is the alkaline diet effective for weight loss and disease prevention?',
      answer: 'The alkaline diet, combined with LUXAB alkaline water, can support weight management and overall health by maintaining optimal pH levels in the body.'
    },
    {
      question: 'What is the best sports drink?',
      answer: 'LUXAB alkaline water is an excellent choice for athletes as it helps maintain hydration and supports energy levels during physical activities.'
    },
    {
      question: 'Health benefits of alkaline water',
      answer: 'Alkaline water offers numerous benefits including improved hydration, enhanced energy levels, better nutrient absorption, and support for overall wellness.'
    },
    {
      question: 'Why do we need to drink alkaline ionized water?',
      answer: 'Alkaline ionized water helps balance body pH, supports detoxification, and provides essential minerals for optimal health.'
    },
    {
      question: 'Insights from the 31st International Exhibition',
      answer: 'LUXAB showcased innovative water solutions and received recognition for our commitment to quality and sustainability.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-12 text-gray-800"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
            >
              <span className="font-medium text-gray-700">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;