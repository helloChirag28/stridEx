'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export default function DropCountdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set countdown to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section ref={ref} className="py-20 bg-gray-900 scroll-snap-section relative overflow-hidden">
      {/* Background Sneaker Outline */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-[20rem] transform rotate-12">👟</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl mb-6">
            <span className="gradient-text">NEXT DROP</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The most anticipated release of the year
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-black/50 rounded-lg p-4 md:p-6 neon-border"
            >
              <div className="font-bebas text-3xl md:text-5xl gradient-text">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <h3 className="font-bebas text-2xl md:text-3xl mb-4 tracking-wider">
            GET EARLY ACCESS
          </h3>
          <p className="text-gray-400 mb-6">
            Join our exclusive list and be the first to know when we drop.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-neon-blue"
              required
            />
            <Button 
              type="submit"
              className="bg-neon-gradient hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-300 text-black font-semibold group"
            >
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>

        {/* Pulse Effect */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-neon-blue/5 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
}