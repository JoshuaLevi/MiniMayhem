import Image from "next/image";
import { ShieldCheckIcon, UserCircleIcon, UsersIcon, StarIcon, TrophyIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-bg">
      {/* Hero Section */}
      <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-section-desktop pt-20 sm:pt-24 md:pt-0 pb-20">
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-8 text-white md:tracking-wider">
          MiniMayhem
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 md:mb-12 max-w-3xl md:max-w-5xl text-gray-300">
          3 chaotic games. <span className="text-soft-yellow">1 addictive experience.</span> 🎉
        </p>
        <a 
          href="#" // Placeholder link
          className="text-black font-bold px-8 py-4 md:px-10 md:py-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50 text-lg md:text-2xl"
        >
          Play Now on Horizon Worlds!
        </a>
        <div className="mt-12 md:mt-16 w-full max-w-4xl md:max-w-6xl aspect-video bg-gray-900/50 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border-2 border-neon-blue/40">
          <p className="text-gray-400 text-xl md:text-2xl">📺 YouTube Demo Placeholder 🎬</p>
        </div>
      </section>

      {/* About the Game Section - Uses vibrant gradient bg */}
      <section id="about" className="w-full py-section-mobile md:py-section-desktop px-6 sm:px-8 md:px-section-desktop flex flex-col items-center text-center bg-section-gradient-purple-blue pb-20">
        <h2 className="font-heading text-5xl md:text-7xl font-bold mb-12 md:mb-20 text-white">
          About the Game 🎮
        </h2>
        <p className="max-w-3xl md:max-w-5xl mb-16 md:mb-24 text-lg md:text-2xl leading-relaxed text-gray-200">
          MiniMayhem is a fast-paced mashup of three replayable mini-games designed for mobile VR.
        </p>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl md:max-w-7xl w-full">
          {/* Hexagone Card */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 md:p-10 rounded-2xl border-2 border-neon-blue/70 shadow-xl hover:shadow-neon-blue transform transition-all duration-300 hover:scale-105">
            <ShieldCheckIcon className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-neon-blue"/>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-neon-blue">Hexagone</h3>
            <p className="text-gray-300 md:text-lg">Jump fast or fall faster.</p>
          </div>
          {/* Wipeout Card */}
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 md:p-10 rounded-2xl border-2 border-electric-pink/70 shadow-xl hover:shadow-neon-pink transform transition-all duration-300 hover:scale-105">
            <StarIcon className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-6 text-electric-pink"/>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-electric-pink">Wipeout</h3>
            <p className="text-gray-300 md:text-lg">Dodge. Jump. Survive.</p>
          </div>
          {/* Only Up Card */}
          <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-mint-green/70 shadow-xl hover:shadow-neon-green transform transition-all duration-300 hover:scale-105">
            <RocketLaunchIcon className="h-12 w-12 mx-auto mb-4 text-mint-green" />
            <h3 className="font-heading text-3xl font-semibold mb-3 text-mint-green">Only Up</h3>
            <p className="text-gray-300">Precision meets pressure.</p>
          </div>
        </div>
      </section>

      {/* Leaderboard Section - Dark bg for contrast */}
      <section id="leaderboard" className="w-full py-section-mobile md:py-section-desktop px-6 sm:px-8 md:px-section-desktop flex flex-col items-center text-center bg-dark-bg pb-20">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-mint-green">
          Leaderboard 🏆
        </h2>
        <p className="max-w-2xl md:max-w-3xl mb-10 md:mb-12 text-lg md:text-xl leading-relaxed text-gray-300">
          Compete for the top spot! Can you beat the high scores?
        </p>
        <div className="w-full max-w-3xl md:max-w-4xl bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-mint-green/70 hover:shadow-neon-green transition-shadow duration-300">
          <div className="space-y-4">
            {/* Placeholder Leaderboard Entries */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${i === 0 ? 'bg-soft-yellow/20 border border-soft-yellow' : 'bg-gray-700/50'}`}>
                <div className="flex items-center space-x-3">
                  <UserCircleIcon className={`h-8 w-8 ${i === 0 ? 'text-soft-yellow' : 'text-gray-400'}`} />
                  <span className={`font-medium ${i === 0 ? 'text-soft-yellow' : 'text-gray-200'}`}>Player {i + 1}</span>
                </div>
                <span className={`font-semibold ${i === 0 ? 'text-soft-yellow' : 'text-mint-green'}`}>{(12345 - i * 1230).toLocaleString()} PTS</span>
              </div>
            ))}
            <div className="text-center pt-2">
              <a href="#" className="text-neon-blue hover:underline">View Full Leaderboard...</a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Creators Section - Vibrant gradient bg */}
      <section id="creators" className="w-full py-section-mobile md:py-section-desktop px-6 sm:px-8 md:px-section-desktop flex flex-col items-center text-center bg-section-gradient-purple-blue pb-20">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-white">
          Meet the Creators 🧑‍💻
        </h2>
        <p className="max-w-3xl md:max-w-4xl mb-16 md:mb-20 text-lg md:text-xl leading-relaxed text-gray-200">
          Built by two passionate Horizon creators committed to crafting fast, fun, and social experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-4xl md:max-w-5xl w-full">
          <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl flex-1 border border-soft-yellow/70 shadow-xl hover:shadow-neon-yellow transform transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <UserCircleIcon className="h-20 w-20 mb-4 text-soft-yellow" />
            <h3 className="font-heading text-3xl font-semibold text-soft-yellow mb-1">Baruch Geuze</h3>
            <p className="italic text-gray-400">Gamertag: Bgeuze</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl flex-1 border border-soft-yellow/70 shadow-xl hover:shadow-neon-yellow transform transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <UserCircleIcon className="h-20 w-20 mb-4 text-soft-yellow" /> 
            <h3 className="font-heading text-3xl font-semibold text-soft-yellow mb-1">Joshua Silva Maniche</h3>
            <p className="italic text-gray-400">Gamertag: JoshuaLevi</p>
          </div>
        </div>
      </section>

      {/* Roadmap Section - Dark bg for contrast */}
      <section id="roadmap" className="w-full py-section-mobile md:py-section-desktop px-6 sm:px-8 md:px-section-desktop flex flex-col items-center text-center bg-dark-bg pb-20">
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-neon-blue">
          Roadmap 🚀
        </h2>
        <p className="max-w-2xl md:max-w-3xl mb-10 md:mb-12 text-lg md:text-xl leading-relaxed text-gray-300">
          MiniMayhem is just getting started. Exciting updates are on the horizon!
        </p>
        <div className="bg-gray-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-neon-blue/70 shadow-xl hover:shadow-neon-blue transition-shadow duration-300 max-w-lg md:max-w-2xl w-full">
          <ul className="list-disc list-inside text-left space-y-3 text-lg text-gray-200">
            <li>✨ New Minigames Incoming!</li>
            <li>👥 Enhanced Multiplayer Features</li>
            <li>🏅 Achievements & Rewards System</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-16 px-6 sm:px-8 md:px-section-desktop text-center border-t border-gray-700/50 mt-section-mobile md:mt-section-desktop bg-gray-900/50">
        <p className="text-gray-400 mb-4">
          Built for the <span className="text-electric-pink font-semibold">Meta Horizon Worlds Mobile Genre Showdown Hackathon 2025</span>.
        </p>
        <p className="text-xs text-gray-500 animate-pulse-slow">MiniMayhem - Prepare for Chaos!</p>
        {/* Optional social or contact links here */}
      </footer>
    </main>
  );
}
