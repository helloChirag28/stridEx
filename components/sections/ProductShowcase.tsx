'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Urban Runner',
    price: '$299',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Built for the city streets',
  },
  {
    id: 2,
    name: 'Street Beast',
    price: '$349',
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Maximum comfort, maximum style',
  },
  {
    id: 3,
    name: 'Neon Strike',
    price: '$279',
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Light up the night',
  },
  {
    id: 4,
    name: 'Shadow Walker',
    price: '$329',
    image: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Stealth mode activated',
  },
  {
    id: 5,
    name: 'Power Flex',
    price: '$389',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Unleash your potential',
  },
  {
    id: 6,
    name: 'Velocity Pro',
    price: '$419',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Speed redefined',
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-black scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">SIGNATURE COLLECTION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium footwear engineered for performance, designed for style.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-900 p-6">
                {/* Product Image */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bebas text-2xl tracking-wider text-white">
                      {product.name}
                    </h3>
                    <p className="text-gray-400">{product.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">
                      {product.price}
                    </span>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm"
                        className="bg-transparent border border-white/20 hover:border-neon-blue hover:bg-neon-blue/10 transition-all duration-300 group"
                      >
                        Add to Cart
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/50 rounded-lg transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}