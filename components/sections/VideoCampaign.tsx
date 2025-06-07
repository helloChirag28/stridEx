'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function VideoCampaign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="py-20 bg-gray-900 scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">CAMPAIGN 2024</span>
          </h2>
          <p className="text-xl text-gray-300">
            Shot in Mumbai. Made for the World.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
            {/* Placeholder Image */}
            <img
              src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Campaign Video"
              className="w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="relative">
                {/* Pulse Animation */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-neon-blue/30 rounded-full"
                ></motion.div>
                
                {/* Play Button */}
                <div className="relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white ml-0" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Video Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-left"
              >
                <p className="text-lg text-white/90 mb-2">
                  "Every stride tells a story. Every step breaks barriers."
                </p>
                <p className="text-sm text-white/70">
                  Featuring Athletes from Mumbai Streets
                </p>
              </motion.div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-neon-gradient opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl"></div>
        </motion.div>

        {/* Video Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-12 text-center"
        >
          <div>
            <div className="font-bebas text-3xl gradient-text">2.5M</div>
            <div className="text-gray-400">Views</div>
          </div>
          <div>
            <div className="font-bebas text-3xl gradient-text">150K</div>
            <div className="text-gray-400">Shares</div>
          </div>
          <div>
            <div className="font-bebas text-3xl gradient-text">50K</div>
            <div className="text-gray-400">Comments</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}