import React, { useEffect, useRef } from 'react';
import { TowerControl as GameController, Swords, Users, Coins, Check } from 'lucide-react';
import Header from './components/Header';
import ParticleEffect from './components/ParticleEffect';

// Modern Twitter/X Icon Component
const TwitterXIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Modern Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

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
          <h1 className="text-5xl font-bold text-[#191970] mb-6 animate-slide-in">
            Welcome to RPS TITANS
          </h1>
          <p className="text-xl text-[#191970]/90 mb-8 max-w-2xl animate-slide-in-delay-1">
            Experience the ultimate Rock Paper Scissors battle arena where strategy meets excitement.
            Compete against players worldwide and become a true Titan!
          </p>
          <div className="flex gap-4 animate-slide-in-delay-2">
            <a href="https://t.me/RPS_Titans_bot?game=RPSTitans">
              <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
                Whitelist Now
              </button>
            </a>
            <button className="border-2 border-[#191970] text-[#191970] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#191970]/10 hover:scale-105 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Early Access Titan Program Section */}
      <section className="relative py-20 px-4 bg-[#191970] overflow-hidden">
        <ParticleEffect density={25} />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Early Access Titan Program
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're onboarding 100 Telegram groups in our exclusive pre-launch rev-share phase.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <Check className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-[#FFD700] mb-2">No cost to join</h3>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <Check className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-[#FFD700] mb-2">Earn from every game played in your group</h3>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300">
                <Check className="w-8 h-8 text-white mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-[#FFD700] mb-2">Be among the first to unlock Titan rewards</h3>
              </div>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold text-lg">Groups Onboarded</span>
                <span className="text-[#FFD700] font-bold text-lg">{progressPercentage}/100</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-8 overflow-hidden progress-bar-container">
                <div 
                  className="h-full bg-gradient-to-r from-[#FFD700] via-[#FFD700] to-[#FFD700]/80 rounded-full progress-bar-fill relative"
                  style={{ '--progress-width': `${progressPercentage}%` } as React.CSSProperties}
                >
                </div>
              </div>
              <div className="mt-4 text-white/80 text-sm">
                <span className="text-[#FFD700] font-bold">{100 - progressPercentage} spots remaining</span> • Limited time opportunity
              </div>
            </div>

            <div className="mt-8">
              <a href="/partners">
                <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD700]/90 hover:scale-105 transition-all shadow-lg">
                  Join Early Access Program
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Background Image */}
      <section id="about" className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://5f0hp6m3t5.ufs.sh/f/ccs3Vomw9oukdDz5sqIJYGL8BJ4oXzm2aMFODc701tAfvlhp')`
          }}
        >
          <div className="absolute inset-0 bg-[rgb(235,234,231)]/85"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="bg-white/50 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto hover:transform hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl font-bold text-center text-[#191970] mb-6">About RPS Titans</h2>
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

      {/* Roadmap Section - Original Vertical Layout with Particles */}
      <section id="roadmap" className="relative py-32 px-4 bg-[#191970] overflow-hidden" ref={roadmapRef}>
        <ParticleEffect density={25} />
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Development Roadmap</h2>
          <p className="text-center text-[#FFD700] font-bold mb-16">Our path to RPS greatness</p>

          <div className="relative max-w-2xl mx-auto">
            <div className="roadmap-line"></div>

            <div className="space-y-24">
              <div className="roadmap-item relative pl-8 md:pl-0 md:ml-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-bold">Q2 2025</div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-4">Genesis Titans</h3>
                  <ul className="text-white/80 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                      Develop Gameplay Mechanics
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                      Develop Telegram Infrastructures
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                      Rev-Share Ecosystem
                    </li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pr-8 md:pr-0 md:mr-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-bold">Q3 2025</div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-4">Pre-Launch</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• OG Titans Whitelisting</li>
                    <li>• Titan Rev-Share</li>
                    <li>• Community Growth</li>
                    <li>• Early access RPS Titans</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pl-8 md:pl-0 md:ml-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-bold">Q1 2026</div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-4">Titans Awakens</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• More Win2Earn Game-Modes</li>
                    <li>• Clan Wars Begin</li>
                    <li>• $GRPS Token Launch</li>
                  </ul>
                </div>
              </div>

              <div className="roadmap-item relative pr-8 md:pr-0 md:mr-[calc(50%+2rem)]">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border-2 border-[#FFD700] relative">
                  <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#191970] px-4 py-1 rounded-full font-bold">Q2 2026</div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-4">Alpha Launch</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Tournaments</li>
                    <li>• Staking Unlockables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-[#191970]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#191970] mb-12">Game Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <GameController className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-[#191970] mb-2">Strategic Gameplay</h3>
              <p className="text-[#191970]/80">Master the art of prediction and outsmart your opponents in intense RPS battles.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Swords className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-[#191970] mb-2">Epic Tournaments</h3>
              <p className="text-[#191970]/80">Compete in daily tournaments and climb the global leaderboards.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-[#191970] mb-2">Multiplayer Battles</h3>
              <p className="text-[#191970]/80">Challenge friends or face random opponents in real-time matches.</p>
            </div>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <Coins className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-[#191970] mb-2">Win to Earn</h3>
              <p className="text-[#191970]/80">Earn real crypto rewards for every victory. The more you win, the more you earn!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#191970] text-white overflow-hidden">
        <ParticleEffect density={30} />
        
        <div className="relative pt-20 pb-8 z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-3">RPS Titans</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The ultimate Rock Paper Scissors battle arena where strategy meets excitement.
                  </p>
                </div>
              </div>

              {/* Game Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Game</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">About</a></li>
                  <li><a href="#features" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Features</a></li>
                  <li><a href="#roadmap" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Roadmap</a></li>
                  <li><span className="text-white/40 text-sm">Tournaments (coming soon)</span></li>
                </ul>
              </div>

              {/* Community Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Community</h4>
                <ul className="space-y-3">
                  <li><a href="/partners" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Partners</a></li>
                  <li><span className="text-white/40 text-sm">Leaderboards (coming soon)</span></li>
                  <li><span className="text-white/40 text-sm">Events (coming soon)</span></li>
                  <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Support</a></li>
                </ul>
              </div>

              {/* Social & Contact */}
              <div>
                <h4 className="text-lg font-bold text-[#FFD700] mb-4">FOLLOW US & STAY TUNED!</h4>
                <div className="flex gap-4 mb-6">
                  <a href="https://x.com/RpsTitans_Game" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <TwitterXIcon className="w-6 h-6" />
                  </a>
                  <a href="https://t.me/rps_titans" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <TelegramIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">© 2025 RPS TITANS. All rights reserved.</p>
                <div className="flex gap-6 text-sm">
                  <a href="/privacy" className="text-white/60 hover:text-[#FFD700] transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-white/60 hover:text-[#FFD700] transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;