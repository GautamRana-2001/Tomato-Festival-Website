'use client';

import { GiTomato, GiSpeaker, GiRecycle } from 'react-icons/gi';
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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 overflow-hidden"
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
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.5,
            }}
            className="absolute"
          >
            <TomatoSVG className="opacity-30" />
          </motion.div>
        ))}
        
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`splash-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.3,
            }}
            className="absolute"
          >
            <TomatoSplashSVG className="opacity-50" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative">
          {/* Neon Title with Tomato Decor */}
          <div className="relative text-center mb-12">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full blur-2xl opacity-30"></div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <span className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] relative z-10">
                🎊 About the Fest
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/20 via-[#FFA500]/20 to-[#FFD700]/20 blur-lg"></div>
            </motion.h2>
          </div>

          {/* Decorative Tomato Elements */}
          <div className="absolute top-4 left-4 text-6xl">
            <TomatoSVG size={64} />
          </div>
          <div className="absolute bottom-4 right-4 text-6xl">
            <TomatoSVG size={64} />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Splash Zones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl p-6 bg-gradient-to-tr from-[#2D0000] to-[#4D0000] border border-[#FF4500] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:rotate-[-2deg] hover:border-[#FF6347]"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full blur-lg opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#FF4500] to-[#FF6347] rounded-full blur-lg opacity-30"></div>
              <div className="relative z-10">
                <GiTomato className="text-[#FF4500] text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] to-[#FF6347]">Splash Zones</h3>
                <p className="text-gray-300">Experience the ultimate tomato-throwing madness in our specially designed splash zones. Get ready to get messy!</p>
              </div>
            </div>
          </motion.div>

          {/* DJ & Foam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl p-6 bg-gradient-to-tr from-[#2D0000] to-[#4D0000] border border-[#FFA500] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:rotate-[2deg] hover:border-[#FFD700]"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#FFA500] to-[#FFD700] rounded-full blur-lg opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#FFA500] to-[#FFD700] rounded-full blur-lg opacity-30"></div>
              <div className="relative z-10">
                <GiSpeaker className="text-[#FFA500] text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FFA500] to-[#FFD700]">DJ & Foam</h3>
                <p className="text-gray-300">Get down to the beats with our top DJs while enjoying foam parties and tomato showers!</p>
              </div>
            </div>
          </motion.div>

          {/* Eco Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl p-6 bg-gradient-to-tr from-[#2D0000] to-[#4D0000] border border-[#228B22] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:rotate-[-2deg] hover:border-[#32CD32]"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#228B22] to-[#32CD32] rounded-full blur-lg opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#228B22] to-[#32CD32] rounded-full blur-lg opacity-30"></div>
              <div className="relative z-10">
                <GiRecycle className="text-[#228B22] text-4xl mb-4" />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#228B22] to-[#32CD32]">Eco Promise</h3>
                <p className="text-gray-300">Join us in making this festival sustainable with our eco-friendly practices and recycling initiatives.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Tomato Splash */}
        <div className="mt-12 relative">
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                className="opacity-20"
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FF4500" strokeWidth="3" />
              </svg>
            </motion.div>
          </div>
          <div className="relative text-center">
            <p className="text-lg sm:text-xl leading-relaxed font-medium text-white/80">
              Inspired by Spain’s legendary tomato-throwing festival, <strong className="text-[#FF4500]">La Tomatina Fest India</strong> brings the same
              juicy chaos with a bold, desi twist – right in the heart of Pune!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
