import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Components
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

const SplashSVG = ({ size = 56, className = '' }: { size?: number; className?: string }) => (
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

const palette = ['#FF6347', '#FFD700', '#FF4500', '#fff', '#FFB347'];
const words = ['La Tomatina', 'Fest India', '2025'];

// Cracker SVG Component
const CrackerSVG = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <circle cx="16" cy="16" r="8" fill="#FF4500" fillOpacity="0.8" />
    <circle cx="16" cy="16" r="6" fill="#FF6347" fillOpacity="0.6" />
    <circle cx="16" cy="16" r="4" fill="#FFB347" fillOpacity="0.4" />
    <path
      d="M16 8v16"
      stroke="#FF4500"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11 16h10"
      stroke="#FF4500"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 11l0 10"
      stroke="#FF6347"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M11 16l10 0"
      stroke="#FF6347"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Festival Firework SVG Component
const FireworkSVG = ({ size = 48, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <circle cx="24" cy="24" r="12" fill="#FF4500" fillOpacity="0.2" />
    <circle cx="24" cy="24" r="8" fill="#FF6347" fillOpacity="0.4" />
    <circle cx="24" cy="24" r="4" fill="#FFB347" fillOpacity="0.6" />
    <path
      d="M24 12v24"
      stroke="#FF4500"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 24h24"
      stroke="#FF6347"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 12l12 12"
      stroke="#FFB347"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M36 12l-12 12"
      stroke="#FF4500"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function HeroSection() {
  const [colorIdx, setColorIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [prevSeconds, setPrevSeconds] = useState('00');
  const [burstTomatoes, setBurstTomatoes] = useState<{id: number, x: number, y: number}[]>([]);
  const [ctaParticles, setCtaParticles] = useState<{id: number, x: number, y: number}[]>([]);
  const [parallax, setParallax] = useState(0);
  const [crackers, setCrackers] = useState<{id: number, x: number, y: number}[]>([]);
  const [fireworks, setFireworks] = useState<{id: number, x: number, y: number}[]>([]);
  const burstTimeout = useRef<NodeJS.Timeout | null>(null);

  // Cracker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCrackers(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Firework animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Cracker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCrackers(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Firework animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight
        }
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Color cycling
  useEffect(() => {
    const interval = setInterval(() => setColorIdx((i) => (i + 1) % palette.length), 1000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2025-08-23T12:30:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
        setPrevSeconds(timeLeft.seconds);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft.seconds]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setParallax(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Random tomato bursts
  useEffect(() => {
    function triggerBurst() {
      const x = Math.random() * 100; // vw
      const y = Math.random() * 60 + 10; // vh
      setBurstTomatoes((prev) => [...prev, { id: Date.now(), x, y }]);
      burstTimeout.current = setTimeout(triggerBurst, Math.random() * 5000 + 4000);
    }
    burstTimeout.current = setTimeout(triggerBurst, 3000);
    return () => {
      if (burstTimeout.current) clearTimeout(burstTimeout.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-black bg-hero-dark-gradient text-orange-100 px-6 pt-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #18181a 0%, #2a0909 60%, #1a0e0e 100%)',
      }}
      suppressHydrationWarning={true}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center" data-animate="fadeInUp">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Background animations */}
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 22}%`,
                zIndex: 0,
              }}
              animate={{
                y: [0, -30 + Math.random() * 20, 0],
                rotate: [0, 20 - i * 5, -10 + i * 5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: i * 0.7,
              }}
            >
              <TomatoSVG size={48 + i * 6} className="opacity-60 drop-shadow-2xl" />
            </motion.div>
          ))}
          {[...Array(3)].map((_, i) => (
            <div className="relative h-screen flex flex-col items-center justify-center text-center">
              {/* Background Tomatoes */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
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
              </div>

              {/* Floating Tomatoes */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 100 }}
                    animate={{
                      y: [-100, 100],
                      x: [0, 20, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.5,
                    }}
                    className="absolute"
                  >
                    <TomatoSVG className="opacity-40" />
                  </motion.div>
                ))}
              </div>

              {/* Crackers */}
              <div className="absolute inset-0 pointer-events-none">
                {crackers.map((cracker) => (
                  <motion.div
                    key={cracker.id}
                    initial={{
                      x: cracker.x,
                      y: cracker.y,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={{
                      x: cracker.x,
                      y: cracker.y - 100,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: 1,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    onAnimationComplete={() => {
                      setCrackers(prev => prev.filter(c => c.id !== cracker.id));
                    }}
                    className="absolute"
                  >
                    <CrackerSVG className="opacity-70" />
                  </motion.div>
                ))}
              </div>

              {/* Fireworks */}
              <div className="absolute inset-0 pointer-events-none">
                {fireworks.map((firework) => (
                  <motion.div
                    key={firework.id}
                    initial={{
                      x: firework.x,
                      y: firework.y,
                      scale: 0,
                      opacity: 0
                    }}
                    animate={{
                      x: firework.x,
                      y: firework.y - 200,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 720]
                    }}
                    transition={{
                      duration: 3,
                      repeat: 1,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                    onAnimationComplete={() => {
                      setFireworks(prev => prev.filter(f => f.id !== firework.id));
                    }}
                    className="absolute"
                  >
                    <FireworkSVG className="opacity-80" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          <AnimatePresence>
            {burstTomatoes.map((t) => (
              <motion.div
                key={t.id}
                initial={{ scale: 0, opacity: 0.8 }}
                animate={{ scale: [0, 1.5, 0.8], opacity: [0.8, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  left: `${t.x}vw`,
                  top: `${t.y}vh`,
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
                onAnimationComplete={() =>
                  setBurstTomatoes((prev) => prev.filter((b) => b.id !== t.id))
                }
              >
                <TomatoSVG size={56} className="drop-shadow-xl" />
                <SplashSVG size={80} className="-mt-8 -ml-4 opacity-60" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-8">
          <motion.p
            className="font-bold text-white bg-gradient-to-r from-[#8B0000] via-[#FF4500] to-[#18181a] py-2 px-6 rounded-full shadow-md inline-block mb-6 tracking-wide text-sm sm:text-lg border border-orange-600"
            initial={{ x: '100%' }}
            animate={{ x: ['100%', '-10%', '-100%'] }}
            transition={{
              duration: 15,
              times: [0, 0.93, 1],
              ease: [0.7, 0, 0.3, 1],
              repeat: Infinity,
            }}
            style={{ boxShadow: '0 0 16px 2px #FF4500aa' }}
          >
            🎯 We are looking for Sponsorship! Partner with India's Juiciest Fest! 🍅🎶📸🍹
          </motion.p>
        </div>

        <motion.h1
          className="mb-4 font-extrabold tracking-wider hero-glow flex flex-row items-center justify-center text-[2.6rem] sm:text-6xl leading-tight gap-3 relative cursor-pointer select-none whitespace-nowrap overflow-x-auto"
          style={{
            textShadow: '0 0 16px #ff4500, 0 0 32px #8b0000',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          whileHover={{ scale: 1.08, rotate: [-2, 2], transition: { duration: 0.5, type: 'spring', stiffness: 400 } }}
          onClick={() => {
            setBurstTomatoes((prev) => [
              ...prev,
              { id: Date.now(), x: 48, y: 14 + Math.random() * 8 },
              { id: Date.now() + 1, x: 53, y: 14 + Math.random() * 8 },
            ]);
          }}
        >
          <span className="inline-block align-middle -mr-2">
            <TomatoSVG size={40} />
          </span>
          {words.map((word, i) => (
            <span
              key={word}
              style={{
                color: palette[(colorIdx + i) % palette.length],
                marginRight: i < 2 ? 10 : 0,
                fontWeight: 900,
                fontSize: 'clamp(2.1rem,7vw,3.5rem)',
                transition: 'color 0.4s',
              }}
              className="inline-block align-middle"
            >
              {word}
            </span>
          ))}
        </motion.h1>

        <div className="relative mt-12">
          <div className="flex gap-6">
            {Object.entries(timeLeft).map(([key, value]) => (
              <motion.div 
                key={key} 
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] rounded-2xl blur-sm opacity-30"></div>
                
                {/* Main Timer Container */}
                <div className="relative w-24 h-24 bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center p-4">
                  {/* Timer Value with Gradient Text */}
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700]">
                    {value}
                  </div>
                  
                  {/* Timer Label */}
                  <div className="mt-2 text-sm font-semibold text-white/80 uppercase tracking-widest">
                    {key}
                  </div>
                </div>
                
                {/* Static Glowing Border */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2"
                  style={{
                    borderImage: 'linear-gradient(to right, #FF4500, #FFA500, #FFD700) 1'
                  }}
                />
              </motion.div>
            ))}
          </div>
          {/* <div className="flex flex-col items-center">
            <span className="font-bold text-orange-100 text-5xl">{timeLeft.seconds}</span>
            <span className="text-orange-500 text-2xl">Seconds</span>
          </div> */}
        </div>

        <p className="text-base sm:text-lg text-orange-200 font-medium max-w-2xl mx-auto">
          Presenting the <span className="font-bold text-[#FF6347]">wildest</span>, <span className="font-bold text-[#FF4500]">juiciest</span> celebration of the year — where
          <span className="font-bold text-[#FF8C00]">tomatoes</span> meet <span className="font-bold text-[#FFA500]">tradition</span> in an explosion of color and joy!
        </p>
      </div>
    </section>
  );
}
