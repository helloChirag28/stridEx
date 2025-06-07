'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import BrandStory from '@/components/sections/BrandStory';
import ProductShowcase from '@/components/sections/ProductShowcase';
import VideoCampaign from '@/components/sections/VideoCampaign';
import Testimonials from '@/components/sections/Testimonials';
import DropCountdown from '@/components/sections/DropCountdown';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/ui/Navigation';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <Navigation />
      <main className="snap-y snap-mandatory">
        <HeroSection />
        <BrandStory />
        <ProductShowcase />
        <VideoCampaign />
        <Testimonials />
        <DropCountdown />
        <Footer />
      </main>
    </motion.div>
  );
}