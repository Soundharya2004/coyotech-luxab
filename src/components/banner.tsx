'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Banner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div ref={containerRef} className="w-full bg-gradient-to-b from-white to-blue-100 pt-24 overflow-hidden">
      {/* Hero Section with Carousel */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-16"
      >
        <div
          className="relative bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6"
          style={{ height: '600px' }} // Increased height
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Article</h2>
          <Carousel
            showArrows
            infiniteLoop
            showThumbs={false}
            autoPlay
            interval={3000}
            className="rounded-xl overflow-hidden h-full"
          >
            {[
              {
                image: 'https://luxab.ae/wp-content/uploads/2024/10/image-22.png',
                title: 'Insights from the 31st International Exhibition',
                description: 'LUXAB showcased innovative water solutions and received recognition for our commitment to quality and sustainability.',
              },
              {
                image: 'https://luxab.ae/wp-content/uploads/2024/10/eca0f507-f1d5-4ce7-ba66-ff3b1872bf09-1-540x720.jpg',
                title: 'Is the alkaline diet effective for weight loss?',
                description: 'The alkaline diet, combined with LUXAB alkaline water, can support weight management and overall health by maintaining optimal pH levels in the body.',
              },
              {
                image: 'https://luxab.ae/wp-content/uploads/2024/10/Screenshot-2024-11-07-142910-418x720.png',
                title: 'Health Benefits of Alkaline Water',
                description: 'Explore the benefits of alkaline water today.',
              },
            ].map((slide, i) => (
              <div key={i}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-700">{slide.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{slide.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        ref={cardsRef}
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-24"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: 'Is the alkaline diet effective for weight loss?',
              image: 'https://luxab.ae/wp-content/uploads/2024/10/eca0f507-f1d5-4ce7-ba66-ff3b1872bf09-1-540x720.jpg',
            },
            {
              title: 'What is the best sports drink?',
              image: 'https://luxab.ae/wp-content/uploads/2024/10/eca0f507-f1d5-4ce7-ba66-ff3b1872bf09-1.jpg',
            },
            {
              title: 'Is the alkaline diet effective for weight loss and disease prevention?',
              image: 'https://luxab.ae/wp-content/uploads/2024/10/Screenshot-2024-11-07-142910.png',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[500px] bg-white/70 backdrop-blur-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full group-hover:bg-red-600 transition-colors">
                    Uncategorized
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <div className="flex items-center text-white/80 text-sm">
                    <img
                      src="https://secure.gravatar.com/avatar/7788dee19b05502b9fe12b42dbe6dc33?s=300&d=mm&r=g"
                      alt="Admin"
                      className="h-8 w-8 rounded-full mr-2"
                    />
                    <span>admin</span>
                    <span className="mx-2">•</span>
                    <span>Oct 31, 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
