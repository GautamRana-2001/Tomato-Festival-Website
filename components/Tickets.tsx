export default function Tickets() {
  return (
    <section
      id="tickets"
      className="relative bg-gradient-to-br from-[#18181a] via-[#2a0909] to-[#1a0e0e] py-20 px-6 text-center overflow-hidden"
    >
      <div className="absolute top-6 left-6 text-5xl animate-float text-[#FF4500]/80">🍅</div>
      <div className="absolute bottom-6 right-6 text-5xl animate-bounce-slow text-[#FF4500]/80">🍅</div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-[#FF4500] mb-10">🎟️ Tickets</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-white/80">
          Choose your vibe — whether you're in for the fun, the foam, or full VIP experience.
          Early Bird tickets are almost here!
        </p>

        {/* Coming Soon Card */}
        <div className="max-w-3xl mx-auto bg-[#18181a]/50 border border-[#FF4500]/30 backdrop-blur-sm p-10 rounded-2xl shadow-xl animate-fadeInUp">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#FF4500] mb-4">
            🚧 Tickets Coming Soon!
          </h3>
          <p className="text-lg text-white/80">
            Stay tuned for the juiciest deals and passes to India's wildest fest!
          </p>
        </div>

        {/* Pulse Note */}
        <p className="mt-10 text-[#FF4500] font-semibold text-lg animate-pulse">
          🚀 Early Bird Offers dropping soon – get ready!
        </p>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

