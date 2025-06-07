'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const images = [
  'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gray-900 scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="block">BORN FROM</span>
              <span className="block gradient-text">THE STREETS</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                StrideX isn&apos;t just a brand. We&apos;re a movement. Born in the gritty streets
                of Mumbai, crafted for those who refuse to be ordinary.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span className="font-bebas text-2xl tracking-wider">RUN.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="font-bebas text-2xl tracking-wider">JUMP.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="font-bebas text-2xl tracking-wider">DOMINATE.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden rounded-lg ${
                  index === 1 ? 'row-span-2' : 'aspect-square'
                }`}
              >
                <img
                  src={image}
                  alt={`Lifestyle ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}