'use client';

const features = [
  { icon: "🍅", title: "Tomato War Zone" },
  { icon: "💦", title: "Foam Splash & Slides" },
  { icon: "🎧", title: "Live DJs & Music Stage" },
  { icon: "🍻", title: "Tomato Bars & Food Stalls" },
  { icon: "📸", title: "Selfie & Instagram Zones" },
  { icon: "🎫", title: "VIP Lounge Experience" },
  { icon: "🎁", title: "Exclusive Hampers & Giveaways" },
];

export default function Features() {
  return (
    <section  id="features" className="relative bg-gradient-to-br from-[#18181a] via-[#2a0909] to-[#1a0e0e] py-20 px-6 overflow-hidden">
      <div className="absolute top-6 left-6 text-5xl animate-float">🍅</div>
       <div className="absolute bottom-6 right-6 text-5xl animate-bounce-slow">🍅</div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-[#C82E28] mb-4"> Features</h2>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
          Dive into the ultimate tomato-themed experience filled with fun, flavor, and festive madness!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFDF8]/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-2xl border border-[#FFA07A]"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#A73724]">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
      `}</style>
    </section>
  );
}

