'use client';

import Link from 'next/link';
import { GiTomato } from 'react-icons/gi';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#330000] via-[#660000] to-[#990000] text-white shadow-xl fixed top-0 left-0 right-0 z-50 rounded-b-3xl backdrop-blur-sm border-b border-[#FF4500]/20">

      {/* Add CSS animations for blinking */}
      <style jsx global>{`
        @keyframes blink1 {
          0% { color: #FF4500; }
          25% { color: #FFA500; }
          50% { color: #FFD700; }
          75% { color: #FF69B4; }
          100% { color: #FF4500; }
        }
        @keyframes blink2 {
          0% { color: #FF69B4; }
          25% { color: #FF4500; }
          50% { color: #FFA500; }
          75% { color: #FFD700; }
          100% { color: #FF69B4; }
        }
        @keyframes blink3 {
          0% { color: #FFD700; }
          25% { color: #FF69B4; }
          50% { color: #FF4500; }
          75% { color: #FFA500; }
          100% { color: #FFD700; }
        }
        @keyframes blink4 {
          0% { color: #FFA500; }
          25% { color: #FFD700; }
          50% { color: #FF69B4; }
          75% { color: #FF4500; }
          100% { color: #FFA500; }
        }
        @keyframes blink5 {
          0% { color: #FF4500; }
          25% { color: #FF69B4; }
          50% { color: #FFD700; }
          75% { color: #FFA500; }
          100% { color: #FF4500; }
        }
        @keyframes blink6 {
          0% { color: #FF69B4; }
          25% { color: #FF4500; }
          50% { color: #FFA500; }
          75% { color: #FFD700; }
          100% { color: #FF69B4; }
        }
        @keyframes blink7 {
          0% { color: #FFD700; }
          25% { color: #FF69B4; }
          50% { color: #FF4500; }
          75% { color: #FFA500; }
          100% { color: #FFD700; }
        }
      `}</style>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-6">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="animate-bounce text-white text-4xl sm:text-5xl ">🍅</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-orange-200 bg-clip-text text-transparent tracking-wide drop-shadow-md">
            La Tomatina Fest India
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold tracking-wide drop-shadow-sm bg-gradient-to-r from-[#330000]/50 via-[#660000]/50 to-[#990000]/50 rounded-lg p-2 backdrop-blur-sm border border-[#FF4500]/30">
          <Link 
            href="/" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink1 1.5s infinite linear',
              color: '#FF4500'
            }}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink2 1.5s infinite linear',
              color: '#FF69B4'
            }}
          >
            About
          </Link>
          <Link 
            href="#features" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink3 1.5s infinite linear',
              color: '#FFD700'
            }}
          >
            Features
          </Link>
          <Link 
            href="#tickets" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink4 1.5s infinite linear',
              color: '#FFA500'
            }}
          >
            Tickets
          </Link>
          <Link 
            href="#gallery" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink5 1.5s infinite linear',
              color: '#FF4500'
            }}
          >
            Gallery
          </Link>
          <Link 
            href="#faq" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink6 1.5s infinite linear',
              color: '#FF69B4'
            }}
          >
            FAQ
          </Link>
          <Link 
            href="#contact" 
            className="transition duration-300 hover:scale-105"
            style={{
              animation: 'blink7 1.5s infinite linear',
              color: '#FFD700'
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
