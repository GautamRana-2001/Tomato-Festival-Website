'use client';

import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Tomato SVG Components
const TomatoSVG = ({ size = 36, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <ellipse cx="24" cy="28" rx="18" ry="14" fill="#FF4500" />
    <ellipse cx="24" cy="28" rx="14" ry="10" fill="#8B0000" fillOpacity=".4" />
    <path d="M24 17c-2-6-6-7-7-7 4 2 5 7 5 7s-3-4-8-3c5 1 7 5 7 5s-5-2-8 2c5-1 8 3 8 3s-2-5 2-7z" fill="#228B22" />
    <ellipse cx="24" cy="28" rx="18" ry="14" fill="#000" fillOpacity=".07" />
  </svg>
);

// Tomato Splash SVG
const TomatoSplashSVG = ({ size = 56, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    className={className}
  >
    <ellipse cx="28" cy="28" rx="22" ry="8" fill="#FF6347" fillOpacity=".6" />
    <ellipse cx="28" cy="28" rx="18" ry="6" fill="#FF4500" fillOpacity=".5" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        position: 'relative'
      }}
    >
      {/* Background Tomatoes and Splashes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`tomato-${i}`}
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8],
              opacity: [0, 1, 0.5],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.3
            }}
          >
            <TomatoSVG className="opacity-60" />
          </motion.div>
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`splash-${i}`}
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.7],
              opacity: [0, 1, 0.4],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.4
            }}
          >
            <TomatoSplashSVG className="opacity-40" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 border-b border-[#FF4500]/30 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Fest Info */}
          <motion.div className="flex flex-col gap-3" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-extrabold text-[#FF4500] drop-shadow-lg">
              <span className="bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                🍅 La Tomatina Fest
              </span>
            </h3>

            <motion.p 
              className="text-sm text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              India's wildest tomato fight is here! Join us for a day filled with music, fun, food, and a splash of madness.
            </motion.p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#FF4500] mb-3">
              <span className="bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {
                [
                  { label: 'About', href: '#about' },
                  { label: 'Tickets', href: '#tickets' },
                  { label: 'Gallery', href: '#gallery' },
                  { label: 'FAQs', href: '#faq' },
                  { label: 'Contact', href: '#contact' },
                ].map((item, index) => (
                  <li key={index}>
                    <motion.a 
                      href={item.href} 
                      className="hover:underline hover:text-[#FF4500] transition duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))
              }
            </ul>
          </motion.div>

          {/* Contact + Socials */}
          <motion.div 
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#FF4500] mb-3">
              <span className="bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h3>

            <motion.p 
              className="text-sm text-white/80 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaPhoneAlt className="text-white/80" /> +91 99999 99999
            </motion.p>

            <motion.p 
              className="text-sm text-white/80 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <FaMapMarkerAlt className="text-white/80" /> Pune, Maharashtra
            </motion.p>

            <motion.p 
              className="text-sm text-white/80 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FaEnvelope className="text-white/80" /> info@latomatinafestindia.com 
            </motion.p>

            <motion.div 
              className="flex gap-4 mt-2 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                className="hover:text-[#FF4500] transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                className="hover:text-[#FF4500] transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                className="hover:text-[#FF4500] transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <FaYoutube />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div 
          className="text-center text-sm text-white/80 mt-6 border-t border-[#FF4500]/30 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} La Tomatina Fest India. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
