'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-bg scroll-snap-section overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Sneaker */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="w-96 h-96 bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-full blur-xl"></div>
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-2xl neon-glow flex items-center justify-center">
            <span className="text-6xl">👟</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-none tracking-wider mb-6">
                <span className="block">UNLEASH</span>
                <span className="block gradient-text">THE STREET</span>
                <span className="block">INSIDE YOU</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Premium streetwear and footwear designed for the urban athlete. 
              Every step tells your story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-neon-gradient hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300 text-black font-semibold group"
              >
                Shop Now 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/20 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Campaign
              </Button>
            </motion.div>
          </div>

          {/* Mobile Sneaker */}
          <div className="lg:hidden mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-neon-blue/20 to-neon-green/20 rounded-full blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 h-52 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[30px] shadow-2xl neon-glow flex items-center justify-center">
                  <span className="text-5xl">👟</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}