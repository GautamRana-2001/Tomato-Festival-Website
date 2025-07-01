'use client';

import { motion, useScroll } from 'framer-motion';

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

const galleryImages = [
  { 
    src: '/war.jpg', 
    alt: 'Tomato Throw', 
    caption: 'Tomato War Zone Madness',
    color: '#FF4500'
  },
  { 
    src: '/dj.jpg', 
    alt: 'DJ Party', 
    caption: 'Live DJ & Dance Floor',
    color: '#FFD700'
  },
  { 
    src: '/foam.jpg', 
    alt: 'Foam Slide', 
    caption: 'Foam Slides & Fun',
    color: '#FFA500'
  },
  { 
    src: '/h.png', 
    alt: 'Selfie Zone', 
    caption: 'Selfie & Insta Corners',
    color: '#FF69B4'
  },
  { 
    src: '/crowd.jpg', 
    alt: 'Crowd Fun', 
    caption: 'The Ultimate Tomato Crowd',
    color: '#8B0000'
  },
  { 
    src: '/food.jpg', 
    alt: 'Food Stalls', 
    caption: 'Yummy Food & Drinks',
    color: '#FF8C00'
  },
];

export default function Gallery() {
  const { scrollY } = useScroll();

  return (
    <section
      id="gallery"
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

      {/* Decorative Emojis */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-4 left-4 text-6xl text-[#FF4500]/20">🍅</div>
        <div className="absolute bottom-4 right-4 text-6xl text-[#FF69B4]/20">📸</div>
        <div className="absolute top-4 right-4 text-6xl text-[#FFD700]/20">📸</div>
        <div className="absolute bottom-4 left-4 text-6xl text-[#FFA500]/20">📸</div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
            📸 Festival Gallery
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/20 via-[#FFA500]/20 to-[#FFD700]/20 blur-lg"></div>
        </motion.h2>

        <motion.p
          className="text-lg text-white/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Relive the splash! Here are some juicy moments from past editions of La Tomatina Fest.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              className="relative overflow-hidden rounded-3xl border border-[#FF4500]/20 backdrop-blur-sm bg-[#1a1a1a]/50 transform transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px 5px rgba(255, 69, 0, 0.3)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transform transition-transform duration-300"
                  style={{
                    filter: 'brightness(100%)',
                    transition: 'filter 0.3s'
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    className="text-center text-white font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className="text-sm mb-1 block">
                      {img.caption}
                    </span>
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] rounded-full mx-auto"
                      initial={{ width: 0 }}
                      whileHover={{
                        width: '100%',
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SVG Components */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
