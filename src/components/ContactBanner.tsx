import React from 'react'
import { Droplet } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Experience the Ultimate Hydration with LUXAB Alkaline Water
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            Reach out to us today! Whether you have questions, need support, or want to learn more about LUXAB,
            our friendly team is ready to assist you for a refreshing experience.
          </p>
          <br />
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
        Follow
            </span>
          </motion.button>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative h-[200px] w-[300px] sm:h-[300px] sm:w-[450px]">
            <div className="absolute -left-12 top-0 h-32 w-32 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-200/50 backdrop-blur-sm">
                <Droplet className="h-12 w-12 text-purple-500" />
              </div>
            </div>
            <div className="absolute -right-8 bottom-0 h-24 w-24 animate-[float_8s_ease-in-out_infinite]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-200/50 backdrop-blur-sm">
                <Droplet className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}