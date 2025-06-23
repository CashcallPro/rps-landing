import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, DollarSign, Zap, Shield, TrendingUp, Bot, Trophy, Target, Calculator, Check } from 'lucide-react';
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

const Partners = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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
              BECOME A TITAN PARTNER
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD700] mb-3 font-bold animate-slide-in-delay-1">
              Earn every time your community plays.
            </p>
            <p className="text-lg text-white/90 mb-4 animate-slide-in-delay-2">
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

      {/* How Earnings Work - Two Part Section with Image Title, Updated Background, and Parallax Image */}
      <section id="earnings" className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: 'rgb(25, 25, 108)' }}>
        <ParticleEffect density={30} />
        
        {/* Parallax Image positioned absolutely on the right */}
        <div 
          className="absolute right-0 top-0 w-64 md:w-80 lg:w-96 h-full z-10 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * -0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="/image copy copy.png"
            alt="Parallax Coins"
            className="w-full h-auto object-contain opacity-30"
          />
        </div>

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

      {/* Enhanced Why Join Section with Creative Hexagonal Design */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[rgb(235,234,231)] via-[rgb(245,244,241)] to-[rgb(235,234,231)]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#191970]/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FFD700]/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Left and Right Coin Images with Enhanced Parallax */}
        <div 
          className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-64 z-20 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="/coins-left.png"
            alt="Coins Left"
            className="h-full w-full object-cover object-right opacity-15"
          />
        </div>
        
        <div 
          className="absolute right-0 top-0 h-full w-32 md:w-48 lg:w-64 z-20 pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="/coins_right.png"
            alt="Coins Right"
            className="h-full w-full object-cover object-left opacity-15"
          />
        </div>

        <div className="container mx-auto relative z-30">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 scroll-animate fade-in-up">
              <div className="inline-block relative">
                <h2 className="text-5xl md:text-6xl font-black text-[#191970] mb-4 relative z-10">
                  WHY JOIN?
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFD700]/50 rounded-full"></div>
              </div>
              <p className="text-xl text-[#191970]/80 mt-6 max-w-2xl mx-auto leading-relaxed">
                Transform your community into a revenue-generating powerhouse
              </p>
            </div>

            {/* Hexagonal Grid Layout */}
            <div className="relative">
              {/* Central Feature - Larger Hexagon */}
              <div className="flex justify-center mb-12 scroll-animate scale-in">
                <div className="relative group">
                  <div className="hexagon-large bg-gradient-to-br from-[#FFD700] via-[#FFD700]/90 to-[#FFD700]/80 shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-500 hover:scale-110">
                    <div className="hexagon-content-large text-center text-[#191970]">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-black mb-3">PASSIVE INCOME</h3>
                      <p className="text-sm font-semibold leading-tight">
                        Earn from your existing community without any extra effort
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 hexagon-large bg-gradient-to-br from-[#FFD700]/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
              </div>

              {/* Surrounding Features - Smaller Hexagons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {/* Row 1 */}
                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm border-2 border-[#191970]/20 shadow-xl hover:shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center">
                        <Zap className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#191970] mb-2">FULLY AUTOMATED</h3>
                        <p className="text-sm text-[#191970]/80 leading-tight">
                          Set it and forget it - no management needed
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#FFD700]/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm border-2 border-[#191970]/20 shadow-xl hover:shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center">
                        <Shield className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#191970] mb-2">TRANSPARENT</h3>
                        <p className="text-sm text-[#191970]/80 leading-tight">
                          Clear reward system you can trust
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#FFD700]/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm border-2 border-[#191970]/20 shadow-xl hover:shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center">
                        <Bot className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#191970] mb-2">TELEGRAM NATIVE</h3>
                        <p className="text-sm text-[#191970]/80 leading-tight">
                          Built 100% for Telegram & TON blockchain
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#FFD700]/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm border-2 border-[#191970]/20 shadow-xl hover:shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center">
                        <Users className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#191970] mb-2">COMMUNITY FOCUSED</h3>
                        <p className="text-sm text-[#191970]/80 leading-tight">
                          Enhance engagement while earning
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#FFD700]/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm border-2 border-[#191970]/20 shadow-xl hover:shadow-2xl hover:border-[#FFD700]/50 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center">
                        <DollarSign className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-[#191970] mb-2">INVITE ONCE</h3>
                        <p className="text-sm text-[#191970]/80 leading-tight">
                          One-time setup for continuous income
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#FFD700]/10 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>

                <div className="flex justify-center scroll-animate fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="relative group">
                    <div className="hexagon bg-gradient-to-br from-[#191970]/90 via-[#191970]/80 to-[#191970]/70 shadow-2xl hover:shadow-[#191970]/30 transition-all duration-500 hover:scale-105">
                      <div className="hexagon-content text-center text-white">
                        <Trophy className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                        <h3 className="text-lg font-bold mb-2">EARLY ACCESS</h3>
                        <p className="text-sm text-white/90 leading-tight">
                          Limited spots for maximum rewards
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 hexagon bg-[#191970]/20 blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 scroll-animate bounce-in">
              <div className="inline-block p-8 bg-gradient-to-br from-[#FFD700]/20 via-[#FFD700]/10 to-transparent rounded-3xl border-2 border-[#FFD700]/30 backdrop-blur-sm">
                <p className="text-2xl font-bold text-[#191970] mb-4">
                  Ready to turn your community into a revenue stream?
                </p>
                <div className="w-16 h-1 bg-[#FFD700] mx-auto rounded-full mb-6"></div>
                <p className="text-[#191970]/80 mb-6">
                  Join the exclusive Titan Partner Program today
                </p>
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
              <div className="text-5xl font-bold text-[#FFD700] mb-3">200</div>
              <div className="text-lg text-white">Total Partner Spots Available</div>
              <div className="text-[#FFD700] font-bold mt-2 text-sm">Limited Time • Exclusive Access</div>
            </div>

            <div className="scroll-animate bounce-in">
              <a href="https://t.me/RPS_Titans_bot">
                <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-bold text-xl hover:bg-[#FFD700]/90 hover:scale-105 transition-all shadow-lg flex items-center gap-3 mx-auto">
                  BECOME
                  A TITAN PARTNER
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