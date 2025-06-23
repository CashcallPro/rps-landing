import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, DollarSign, Zap, Shield, TrendingUp, Bot, Trophy, Target, Calculator, Check, Gamepad2, Vault, Award } from 'lucide-react';
import Header from './Header';
import ParticleEffect from './ParticleEffect';

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

// Dynamic progress calculation - Updated to show 127/200 (73 empty spots)
const calculateProgress = () => {
  const startDate = new Date('2025-01-01').getTime();
  const currentDate = new Date().getTime();
  const daysSinceStart = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
  
  // Start from 127 partners (73 empty spots)
  let progress = 127;
  
  // Add random progress for each day that has passed
  for (let i = 0; i < daysSinceStart; i++) {
    // Use day as seed for consistent random values
    const seed = startDate + (i * 24 * 60 * 60 * 1000);
    const random = Math.sin(seed) * 10000;
    const dailyIncrease = Math.floor((random - Math.floor(random)) * 3); // 0-2 random increase
    progress += dailyIncrease;
  }
  
  // Cap at 200
  return Math.min(progress, 200);
};

const Partners = () => {
  const [currentProgress, setCurrentProgress] = useState(127);

  useEffect(() => {
    // Calculate dynamic progress
    const progress = calculateProgress();
    setCurrentProgress(progress);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      {/* Header */}
      <Header isPartnerPage={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-[#191970] overflow-hidden">
        <ParticleEffect density={25} />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
              Become a Titan Partner
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD700] mb-3 font-bold animate-slide-in-delay-1">
              Earn every time your community plays.
            </p>
            <p className="text-lg text-white/90 mb-6 animate-slide-in-delay-2">
              Host the bot. Earn passive income. It's that simple.
            </p>
          </div>
        </div>
      </section>

      {/* What is the Program */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#191970] mb-6 text-center scroll-animate fade-in-up">
              🔹 What is the Titan Partner Program?
            </h2>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
              <p className="text-base text-[#191970]/90 leading-relaxed">
                The <strong>Titan Partner Program</strong> is a revenue-sharing system for <strong>Telegram group and channel admins</strong>.
                Add the <strong>@RPS_Titans_bot</strong> to your group, and start earning automatically whenever your members play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Earnings Work - Two Part Section with Image Title and Updated Background */}
      <section id="earnings" className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: 'rgb(25, 25, 108)' }}>
        <ParticleEffect density={30} />
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Image Title */}
            <div className="text-center mb-8 scroll-animate fade-in-up">
              <img
                src="/image copy.png"
                alt="How Earnings Work"
                className="mx-auto max-w-md w-full h-auto"
              />
            </div>
            <p className="text-xl text-white/90 mb-12 text-center scroll-animate fade-in-up leading-relaxed">
              Every match in RPS Titans generates rewards — not just for players, but also for you.
            </p>

            {/* Part 1: Per Game Round Breakdown */}
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl mb-12 scroll-animate scale-in">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-[#FFD700] mr-4" />
                Per Game Round Breakdown
              </h3>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Game Flow */}
                <div className="space-y-6">
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20 border-l-4 border-l-[#FFD700] scroll-animate slide-in-left shadow-lg">
                    <div className="flex items-center mb-3">
                      <Target className="w-6 h-6 text-[#FFD700] mr-3" />
                      <span className="font-bold text-white text-lg">Game Setup</span>
                    </div>
                    <p className="text-white/80 mb-3">2 Players join and stake 10 tokens each</p>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#FFD700]">20 tokens total</span>
                    </div>
                  </div>

                  <div className="bg-emerald-500/20 backdrop-blur-sm p-6 rounded-xl border border-emerald-400/30 border-l-4 border-l-emerald-400 scroll-animate slide-in-left shadow-lg">
                    <div className="flex items-center mb-3">
                      <Trophy className="w-6 h-6 text-emerald-400 mr-3" />
                      <span className="font-bold text-emerald-100 text-lg">Winner Takes</span>
                    </div>
                    <p className="text-emerald-200/80 mb-3">90% of the total pot goes to winner</p>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-emerald-400">18 tokens</span>
                    </div>
                  </div>

                  <div className="bg-[#FFD700]/20 backdrop-blur-sm p-6 rounded-xl border border-[#FFD700]/30 border-l-4 border-l-[#FFD700] scroll-animate slide-in-left shadow-lg">
                    <div className="flex items-center mb-4">
                      <Calculator className="w-6 h-6 text-[#FFD700] mr-3" />
                      <span className="font-bold text-white text-lg">Fee Distribution (2 tokens)</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-white/80">• RPS Titans ecosystem</span>
                        <span className="font-bold text-white">1.0 token (50%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                        <span className="text-white/80">• Player reward pool</span>
                        <span className="font-bold text-white">0.5 token (25%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#FFD700]/30 backdrop-blur-sm rounded-lg border border-[#FFD700]/50">
                        <span className="text-white font-semibold">• You as Titan Partner</span>
                        <span className="font-bold text-[#FFD700] text-lg">0.5 token (25%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Summary */}
                <div className="flex flex-col justify-center">
                  <div className="text-center p-8 bg-gradient-to-br from-[#FFD700]/30 via-[#FFD700]/20 to-[#FFD700]/10 backdrop-blur-xl rounded-2xl border-2 border-[#FFD700]/50 mb-6 scroll-animate bounce-in shadow-2xl">
                    <DollarSign className="w-20 h-20 text-[#FFD700] mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-3">0.25 tokens</div>
                    <div className="text-lg text-white/80 mb-4">per player, per game</div>
                    <div className="text-sm text-white/70 bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                      = 25% of all game fees
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center scroll-animate fade-in-up shadow-lg">
                      <div className="text-2xl font-bold text-white">10</div>
                      <div className="text-sm text-white/70">tokens staked</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center scroll-animate fade-in-up shadow-lg">
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-sm text-white/70">players</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center scroll-animate fade-in-up shadow-lg">
                      <div className="text-2xl font-bold text-[#FFD700]">0.5</div>
                      <div className="text-sm text-white/70">your share</div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center scroll-animate fade-in-up shadow-lg">
                      <div className="text-2xl font-bold text-emerald-400">18</div>
                      <div className="text-sm text-white/70">winner gets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Real Example: Active Community */}
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl scroll-animate slide-in-right">
              <h3 className="text-3xl font-bold mb-8 flex items-center justify-center text-white">
                <Calculator className="w-10 h-10 text-[#FFD700] mr-4" />
                Real Example: Active Community
              </h3>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20 scroll-animate fade-in-left shadow-lg">
                    <div className="text-sm text-white/70 mb-2">Community Size</div>
                    <div className="text-3xl font-bold text-[#FFD700]">50 active players</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20 scroll-animate fade-in-left shadow-lg">
                    <div className="text-sm text-white/70 mb-2">Daily Activity</div>
                    <div className="text-3xl font-bold text-[#FFD700]">3 rounds per player</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/20 scroll-animate fade-in-left shadow-lg">
                    <div className="text-sm text-white/70 mb-2">Total Daily Rounds</div>
                    <div className="text-3xl font-bold text-[#FFD700]">150 rounds</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#FFD700]/20 backdrop-blur-sm p-6 rounded-xl border-2 border-[#FFD700]/50 scroll-animate fade-in-right shadow-2xl">
                    <div className="text-sm text-white/70 mb-2">Daily Earnings</div>
                    <div className="text-4xl font-bold text-[#FFD700]">75 tokens</div>
                    <div className="text-xs text-white/60 mt-2">150 rounds × 0.5 tokens</div>
                  </div>
                  <div className="bg-[#FFD700]/20 backdrop-blur-sm p-6 rounded-xl border-2 border-[#FFD700]/50 scroll-animate fade-in-right shadow-2xl">
                    <div className="text-sm text-white/70 mb-2">Monthly Earnings</div>
                    <div className="text-4xl font-bold text-[#FFD700]">2,250+ tokens</div>
                    <div className="text-xs text-white/60 mt-2">75 tokens × 30 days</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/15 backdrop-blur-sm rounded-xl border-2 border-[#FFD700]/50 scroll-animate pulse-glow shadow-xl">
                <p className="text-center text-[#FFD700] font-bold text-xl">
                  💰 Passive income that grows with your community engagement!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join with Coin Images */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Left Coin Image */}
        <div className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 z-20 pointer-events-none">
          <img
            src="/coins-left.png"
            alt="Coins Left"
            className="h-full w-full object-cover object-right opacity-20"
          />
        </div>
        
        {/* Right Coin Image */}
        <div className="absolute right-0 top-0 h-full w-32 md:w-48 lg:w-64 z-20 pointer-events-none">
          <img
            src="/coins_right.png"
            alt="Coins Right"
            className="h-full w-full object-cover object-left opacity-20"
          />
        </div>

        <div className="container mx-auto relative z-30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#191970] mb-8 text-center scroll-animate fade-in-up">
              ✅ Why Join?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <TrendingUp className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Passive Income</h3>
                <p className="text-sm text-[#191970]/80">Earn from your existing community without any extra effort</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <Zap className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Fully Automated</h3>
                <p className="text-sm text-[#191970]/80">No need to manage anything - set it and forget it</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <Shield className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Transparent System</h3>
                <p className="text-sm text-[#191970]/80">Clear and transparent reward system you can trust</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <Bot className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Built for Telegram</h3>
                <p className="text-sm text-[#191970]/80">Game built 100% for Telegram and TON blockchain</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <Users className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Community Focused</h3>
                <p className="text-sm text-[#191970]/80">Enhance your community engagement while earning</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 scroll-animate fade-in-up">
                <DollarSign className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-[#191970] mb-2">Invite Once, Earn Forever</h3>
                <p className="text-sm text-[#191970]/80">One-time setup for continuous passive income</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section id="how-it-works" className="py-16 px-4 bg-[#191970]/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#191970] mb-8 text-center scroll-animate fade-in-up">
              ⚙️ How to Get Started
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-bold text-base text-[#191970] mb-1">Add the bot</h3>
                  <p className="text-sm text-[#191970]/80">Add <a href="https://t.me/RPS_Titans_bot" className="text-[#FFD700] hover:underline font-semibold">@RPS_Titans_bot</a> to your group</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-bold text-base text-[#191970] mb-1">Set permissions</h3>
                  <p className="text-sm text-[#191970]/80">Make sure the bot has the correct permissions to function</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-bold text-base text-[#191970] mb-1">Send us your handle</h3>
                  <p className="text-sm text-[#191970]/80">Send us your group's @handle for verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-bold text-base text-[#191970] mb-1">Activation</h3>
                  <p className="text-sm text-[#191970]/80">We'll activate your rev-share and you're ready to earn</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm scroll-animate slide-in-left">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="font-bold text-base text-[#191970] mb-1">Track earnings</h3>
                  <p className="text-sm text-[#191970]/80">Track your earnings from our dashboard (coming soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Early Access */}
      <section className="relative py-16 px-4 bg-[#191970] overflow-hidden">
        <ParticleEffect density={20} />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4 scroll-animate fade-in-up">
              📊 Limited Early Access Program
            </h2>
            <p className="text-lg text-white/90 mb-6 scroll-animate fade-in-up">
              We're onboarding just <span className="text-[#FFD700] font-bold">200 Titan Partners</span> before public launch.
            </p>
            <p className="text-base text-white/80 mb-8 scroll-animate fade-in-up">
              Get in early to claim your community's spot and maximize earnings.
            </p>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 mb-6 scroll-animate scale-in">
              <div className="text-5xl font-bold text-[#FFD700] mb-3">{currentProgress}/200</div>
              <div className="text-lg text-white">OG Titans Onboarded</div>
              <div className="text-[#FFD700] font-bold mt-2 text-sm">{200 - currentProgress} spots remaining • Limited Time • Exclusive Access</div>
            </div>

            <div className="scroll-animate bounce-in">
              <a href="https://t.me/RPS_Titans_bot">
                <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#FFD700]/90 hover:scale-105 transition-all shadow-lg flex items-center gap-3 mx-auto">
                  Join Titans Whitelist
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
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
              <div className="lg:col-span-1 scroll-animate fade-in-up">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#FFD700] mb-3">RPS Titans</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The ultimate Rock Paper Scissors battle arena where strategy meets excitement.
                  </p>
                </div>
              </div>

              {/* Game Links */}
              <div className="scroll-animate fade-in-up">
                <h4 className="text-lg font-bold text-white mb-4">Game</h4>
                <ul className="space-y-3">
                  <li><a href="/" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Home</a></li>
                  <li><a href="/#roadmap" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Roadmap</a></li>
                  <li><a href="/#features" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Features</a></li>
                  <li><span className="text-white/40 text-sm">Tournaments (coming soon)</span></li>
                </ul>
              </div>

              {/* Community Links */}
              <div className="scroll-animate fade-in-up">
                <h4 className="text-lg font-bold text-white mb-4">Community</h4>
                <ul className="space-y-3">
                  <li><a href="/partners" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Partners</a></li>
                  <li><a href="#earnings" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Earnings</a></li>
                  <li><a href="#how-it-works" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">How It Works</a></li>
                  <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Support</a></li>
                </ul>
              </div>

              {/* Social */}
              <div className="scroll-animate fade-in-up">
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
            <div className="border-t border-white/10 pt-6 scroll-animate fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">© 2025 RPS Titans. All rights reserved.</p>
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
};

export default Partners;