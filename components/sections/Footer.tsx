'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: ['New Releases', 'Men', 'Women', 'Kids', 'Accessories'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
  Support: ['Size Guide', 'Shipping', 'Returns', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Accessibility'],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-black pt-20 pb-10 scroll-snap-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-bebas text-4xl gradient-text tracking-wider mb-4">
              STRIDEX
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              StrideX is not a brand. It's your next move.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-bebas text-xl tracking-wider mb-4 text-white">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-gradient group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bebas text-2xl tracking-wider mb-2">
                STAY IN THE LOOP
              </h3>
              <p className="text-gray-400">
                Get the latest drops, exclusive access, and street stories.
              </p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:border-neon-blue focus:outline-none transition-colors"
              />
              <button className="px-6 py-2 bg-neon-gradient text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm"
        >
          <p>© 2024 StrideX. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ for the streets
          </p>
        </motion.div>
      </div>
    </footer>
  );
}