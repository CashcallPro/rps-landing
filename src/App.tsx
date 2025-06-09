import React, { useEffect, useRef } from 'react';
import { TowerControl as GameController, Swords, Users, Coins } from 'lucide-react';
import Header from './components/Header';

function App() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const progressPercentage = 47; // This can be made dynamic later

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const roadmapItems = document.querySelectorAll('.roadmap-item');
    roadmapItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col items-center text-center">
          <img
            src="/image.png"
            alt="RPS Titans Logo"
            className="w-64 h-64 mb-8 animate-float"
          />
          <h1 className="text-5xl font-lilita text-[#191970] mb-6 animate-slide-in">
            Welcome to RPS Titans
          </h1>
          <p className="text-xl text-[#191970]/90 mb-8 max-w-2xl animate-slide-in-delay-1">
            Experience the ultimate Rock Paper Scissors battle arena where strategy meets excitement.
            Compete against players worldwide and become a true Titan!
          </p>
          <div className="flex gap-4 animate-slide-in-delay-2">
            <a href="https://t.me/RPS_Titan_bot?game=RPSTitans">
              <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-lilita text-lg hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
                Play Now
              </button>
            </a>
            <button className="border-2 border-[#191970] text-[#191970] px-8 py-4 rounded-lg font-lilita text-lg hover:bg-[#191970]/10 hover:scale-105 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Early Access Titan Program Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#191970] to-[#191970]/80">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-lilita text-white mb-6">
              🎯 Early Access Titan Program
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're onboarding 100 Telegram groups in our exclusive pre-launch rev-share phase.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-lilita text-[#FFD700] mb-2">No cost to join</h3>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-lilita text-[#FFD700] mb-2">Earn from every game played in your group</h3>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-lilita text-[#FFD700] mb-2">Be among the first to unlock Titan rewards</h3>
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-lilita text-lg">Groups Onboarded</span>
                <span className="text-[#FFD700] font-lilita text-lg">{progressPercentage}/100</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-8 overflow-hidden progress-bar-container">
                <div 
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FFD700]/80 rounded-full progress-bar-fill relative"
                  style={{ '--progress-width': `${progressPercentage}%` } as React.CSSProperties}
                >
                </div>
              </div>
              <div className="mt-4 text-white/80 text-sm">
                <span className="text-[#FFD700] font-lilita">{100 - progressPercentage} spots remaining</span> • Limited time opportunity
              </div>
            </div>

            <div className="mt-8">
              <a href="/partners">
                <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-lilita text-lg hover:bg-[#FFD700]/90 hover:scale-105 transition-all shadow-lg">
                  Join Early Access Program
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto hover:transform hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-lilita text-center text-[#191970] mb-6">About RPS Titans</h2>
            <p className="text-[#191970]/90 text-lg mb-6">
              RPS Titans revolutionizes the classic game of Rock Paper Scissors with modern gameplay mechanics,
              competitive elements, and a vibrant community. Our mission is to create the most engaging and
              strategic RPS experience ever made.
            </p>
            <p className="text-[#191970]/90 text-lg">
              Whether you're a casual player looking for quick matches or a competitive gamer aiming for the top,
              RPS Titans offers something for everyone. Join thousands of players worldwide in this exciting new
              take on a timeless game.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#191970]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-lilita text-center text-[#191970] mb-12">Game Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <GameController className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-lilita text-[#191970] mb-2">Strategic Gameplay</h3>
              <p className="text-[#191970]/80">Master the art of prediction and outsmart your opponents in intense RPS battles.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Swords className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-lilita text-[#191970] mb-2">Epic Tournaments</h3>
              <p className="text-[#191970]/80">Compete in daily tournaments and climb the global leaderboards.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-lilita text-[#191970] mb-2">Multiplayer Battles</h3>
              <p className="text-[#191970]/80">Challenge friends or face random opponents in real-time matches.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Coins className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-lilita text-[#191970] mb-2">Win to Earn</h3>
              <p className="text-[#191970]/80">Earn real crypto rewards for every victory. The more you win, the more you earn!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-[#191970]" ref={roadmapRef}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-lilita text-center text-white mb-4">Development Roadmap</h2>
          <p className="text-center text-[#FFD700] font-lilita mb-16">Our path to RPS greatness</p>

          <div className="relative max-w-2xl mx-auto">
            <div className="roadmap-line"></div>

            <div className="space-y-24">
              <div className="roadmap-item relative pl-8 md:pl-0 md:ml-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-lilita">Q2 2024</div>
                  <h3 className="text-xl font-lilita text-white mt-4 mb-4">Beta Launch</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Core gameplay mechanics</li>
                    <li>• Basic matchmaking</li>
                    <li>• Player profiles</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pr-8 md:pr-0 md:mr-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-lilita">Q3 2024</div>
                  <h3 className="text-xl font-lilita text-white mt-4 mb-4">Tournament System</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Daily tournaments</li>
                    <li>• Ranking system</li>
                    <li>• Rewards mechanism</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pl-8 md:pl-0 md:ml-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-lilita">Q4 2024</div>
                  <h3 className="text-xl font-lilita text-white mt-4 mb-4">Social Features</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Friend system</li>
                    <li>• Custom matches</li>
                    <li>• Chat functionality</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pr-8 md:pr-0 md:mr-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-lilita">Q1 2025</div>
                  <h3 className="text-xl font-lilita text-white mt-4 mb-4">Full Release</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Mobile version</li>
                    <li>• Season passes</li>
                    <li>• Pro tournaments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191970] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-lilita text-[#FFD700] mb-2 hover:scale-105 transition-transform">RPS Titans</h3>
              <p className="text-sm text-white/70">© 2024 RPS Titans. All rights reserved.</p>
            </div>
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Privacy Policy</a>
              <a href="#" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Terms of Service</a>
              <a href="#" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;