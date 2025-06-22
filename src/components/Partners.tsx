import React from 'react';
import { ArrowRight, Users, DollarSign, Zap, Shield, TrendingUp, Bot, Trophy, Target, Calculator } from 'lucide-react';
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

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// YouTube Icon Component
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Partners = () => {
  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      {/* Header */}
      <Header isPartnerPage={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-[#191970] to-[#191970]/80 overflow-hidden">
        <ParticleEffect density={25} />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-lilita text-white mb-4 animate-slide-in">
              🏆 RPS Titans – Become a Titan Partner
            </h1>
            <p className="text-xl md:text-2xl text-[#FFD700] mb-3 font-lilita animate-slide-in-delay-1">
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
            <h2 className="text-3xl font-lilita text-[#191970] mb-6 text-center">
              🔹 What is the Titan Partner Program?
            </h2>
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-base text-[#191970]/90 leading-relaxed">
                The <strong>Titan Partner Program</strong> is a revenue-sharing system for <strong>Telegram group and channel admins</strong>.
                Add the <strong>@RPS_Titans_bot</strong> to your group, and start earning automatically whenever your members play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Earnings Work */}
      <section id="earnings" className="py-16 px-4 bg-[#191970]/5">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-lilita text-[#191970] mb-8 text-center">
              💸 How Earnings Work
            </h2>
            <p className="text-lg text-[#191970]/90 mb-8 text-center">
              Every match in RPS Titans generates rewards — not just for players, but also for you.
            </p>

            {/* Enhanced Per Game Round */}
            <div className="bg-gradient-to-br from-white/60 to-white/40 p-8 rounded-xl backdrop-blur-sm mb-8 border border-[#FFD700]/20">
              <h3 className="text-2xl font-lilita text-[#191970] mb-6 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-[#FFD700] mr-3" />
                Per Game Round Breakdown
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Game Flow */}
                <div className="space-y-4">
                  <div className="bg-[#191970]/10 p-4 rounded-lg border-l-4 border-[#FFD700]">
                    <div className="flex items-center mb-2">
                      <Target className="w-5 h-5 text-[#FFD700] mr-2" />
                      <span className="font-lilita text-[#191970]">Game Setup</span>
                    </div>
                    <p className="text-sm text-[#191970]/80">2 Players join and stake 10 tokens each</p>
                    <div className="text-right">
                      <span className="text-lg font-lilita text-[#FFD700]">20 tokens total</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center mb-2">
                      <Trophy className="w-5 h-5 text-green-600 mr-2" />
                      <span className="font-lilita text-green-700">Winner Takes</span>
                    </div>
                    <p className="text-sm text-green-600">90% of the total pot goes to winner</p>
                    <div className="text-right">
                      <span className="text-lg font-lilita text-green-600">18 tokens</span>
                    </div>
                  </div>

                  <div className="bg-[#FFD700]/20 p-4 rounded-lg border-l-4 border-[#FFD700]">
                    <div className="flex items-center mb-2">
                      <Calculator className="w-5 h-5 text-[#191970] mr-2" />
                      <span className="font-lilita text-[#191970]">Fee Distribution (2 tokens)</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-[#191970]/70">• RPS Titans ecosystem</span>
                        <span className="font-lilita text-[#191970]">1.0 token (50%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#191970]/70">• Player reward pool</span>
                        <span className="font-lilita text-[#191970]">0.5 token (25%)</span>
                      </div>
                      <div className="flex justify-between items-center bg-[#FFD700]/30 p-2 rounded">
                        <span className="text-[#191970] font-semibold">• You as Titan Partner</span>
                        <span className="font-lilita text-[#191970] font-bold">0.5 token (25%)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Summary */}
                <div className="flex flex-col justify-center">
                  <div className="text-center p-6 bg-gradient-to-br from-[#FFD700]/30 to-[#FFD700]/10 rounded-xl border-2 border-[#FFD700] mb-4">
                    <DollarSign className="w-16 h-16 text-[#FFD700] mx-auto mb-3" />
                    <div className="text-3xl font-lilita text-[#191970] mb-2">0.25 tokens</div>
                    <div className="text-sm text-[#191970]/70 mb-3">per player, per game</div>
                    <div className="text-xs text-[#191970]/60 bg-white/50 p-2 rounded">
                      = 25% of all game fees
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="text-lg font-lilita text-[#191970]">10</div>
                      <div className="text-xs text-[#191970]/60">tokens staked</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="text-lg font-lilita text-[#191970]">2</div>
                      <div className="text-xs text-[#191970]/60">players</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="text-lg font-lilita text-[#FFD700]">0.5</div>
                      <div className="text-xs text-[#191970]/60">your share</div>
                    </div>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <div className="text-lg font-lilita text-green-600">18</div>
                      <div className="text-xs text-[#191970]/60">winner gets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Example Calculation */}
            <div className="bg-gradient-to-r from-[#191970] to-[#191970]/80 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-lilita mb-6 flex items-center justify-center">
                <Calculator className="w-8 h-8 text-[#FFD700] mr-3" />
                Real Example: Active Community
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-white/70 mb-1">Community Size</div>
                    <div className="text-2xl font-lilita text-[#FFD700]">50 active players</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-white/70 mb-1">Daily Activity</div>
                    <div className="text-2xl font-lilita text-[#FFD700]">3 rounds per player</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-white/70 mb-1">Total Daily Rounds</div>
                    <div className="text-2xl font-lilita text-[#FFD700]">150 rounds</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#FFD700]/20 p-4 rounded-lg border border-[#FFD700]">
                    <div className="text-sm text-white/70 mb-1">Daily Earnings</div>
                    <div className="text-3xl font-lilita text-[#FFD700]">75 tokens</div>
                    <div className="text-xs text-white/60">150 rounds × 0.5 tokens</div>
                  </div>
                  <div className="bg-[#FFD700]/20 p-4 rounded-lg border border-[#FFD700]">
                    <div className="text-sm text-white/70 mb-1">Monthly Earnings</div>
                    <div className="text-3xl font-lilita text-[#FFD700]">2,250+ tokens</div>
                    <div className="text-xs text-white/60">75 tokens × 30 days</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-lg border border-[#FFD700]/50">
                <p className="text-center text-[#FFD700] font-lilita text-lg">
                  💰 Passive income that grows with your community engagement!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-lilita text-[#191970] mb-8 text-center">
              ✅ Why Join?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Passive Income</h3>
                <p className="text-sm text-[#191970]/80">Earn from your existing community without any extra effort</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <Zap className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Fully Automated</h3>
                <p className="text-sm text-[#191970]/80">No need to manage anything - set it and forget it</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <Shield className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Transparent System</h3>
                <p className="text-sm text-[#191970]/80">Clear and transparent reward system you can trust</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <Bot className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Built for Telegram</h3>
                <p className="text-sm text-[#191970]/80">Game built 100% for Telegram and TON blockchain</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <Users className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Community Focused</h3>
                <p className="text-sm text-[#191970]/80">Enhance your community engagement while earning</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <DollarSign className="w-10 h-10 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-lilita text-[#191970] mb-2">Invite Once, Earn Forever</h3>
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
            <h2 className="text-3xl font-lilita text-[#191970] mb-8 text-center">
              ⚙️ How to Get Started
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-lilita font-bold text-sm">1</div>
                <div>
                  <h3 className="font-lilita text-base text-[#191970] mb-1">Add the bot</h3>
                  <p className="text-sm text-[#191970]/80">Add <a href="https://t.me/RPS_Titans_bot" className="text-[#FFD700] hover:underline font-semibold">@RPS_Titans_bot</a> to your group</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-lilita font-bold text-sm">2</div>
                <div>
                  <h3 className="font-lilita text-base text-[#191970] mb-1">Set permissions</h3>
                  <p className="text-sm text-[#191970]/80">Make sure the bot has the correct permissions to function</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-lilita font-bold text-sm">3</div>
                <div>
                  <h3 className="font-lilita text-base text-[#191970] mb-1">Send us your handle</h3>
                  <p className="text-sm text-[#191970]/80">Send us your group's @handle for verification</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-lilita font-bold text-sm">4</div>
                <div>
                  <h3 className="font-lilita text-base text-[#191970] mb-1">Activation</h3>
                  <p className="text-sm text-[#191970]/80">We'll activate your rev-share and you're ready to earn</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                <div className="bg-[#FFD700] text-[#191970] w-6 h-6 rounded-full flex items-center justify-center font-lilita font-bold text-sm">5</div>
                <div>
                  <h3 className="font-lilita text-base text-[#191970] mb-1">Track earnings</h3>
                  <p className="text-sm text-[#191970]/80">Track your earnings from our dashboard (coming soon)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Early Access */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-[#191970] to-[#191970]/80 overflow-hidden">
        <ParticleEffect density={20} />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-lilita text-white mb-4">
              📊 Limited Early Access Program
            </h2>
            <p className="text-lg text-white/90 mb-6">
              We're onboarding just <span className="text-[#FFD700] font-lilita">100 Titan Partners</span> before public launch.
            </p>
            <p className="text-base text-white/80 mb-8">
              Get in early to claim your community's spot and maximize earnings.
            </p>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-[#FFD700]/30 mb-6">
              <div className="text-5xl font-lilita text-[#FFD700] mb-3">100</div>
              <div className="text-lg text-white">Total Partner Spots Available</div>
              <div className="text-[#FFD700] font-lilita mt-2 text-sm">Limited Time • Exclusive Access</div>
            </div>

            <a href="https://t.me/RPS_Titans_bot">
              <button className="bg-[#FFD700] text-[#191970] px-8 py-4 rounded-lg font-lilita text-xl hover:bg-[#FFD700]/90 hover:scale-105 transition-all shadow-lg flex items-center gap-3 mx-auto">
                Become a Titan Partner
                <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#1a1a2e]/20 via-[#16213e]/60 to-[#0f1419] text-white overflow-hidden">
        <ParticleEffect density={30} />
        
        <div className="relative pt-20 pb-8 z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
              {/* Logo Section */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <img
                    src="/image.png"
                    alt="RPS Titans Logo"
                    className="w-20 h-20 mb-4"
                  />
                  <h3 className="text-2xl font-lilita text-[#FFD700] mb-3">RPS Titans</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The ultimate Rock Paper Scissors battle arena where strategy meets excitement.
                  </p>
                </div>
              </div>

              {/* Game Links */}
              <div>
                <h4 className="text-lg font-lilita text-white mb-4">Game</h4>
                <ul className="space-y-3">
                  <li><a href="/" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Home</a></li>
                  <li><a href="/#about" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">About</a></li>
                  <li><a href="/#features" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Features</a></li>
                  <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Tournaments</a></li>
                </ul>
              </div>

              {/* Community Links */}
              <div>
                <h4 className="text-lg font-lilita text-white mb-4">Community</h4>
                <ul className="space-y-3">
                  <li><a href="/partners" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Partners</a></li>
                  <li><a href="#earnings" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Earnings</a></li>
                  <li><a href="#how-it-works" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">How It Works</a></li>
                  <li><a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors text-sm">Support</a></li>
                </ul>
              </div>

              {/* Social & Contact */}
              <div>
                <h4 className="text-lg font-lilita text-[#FFD700] mb-4">FOLLOW US & STAY TUNED!</h4>
                <div className="flex gap-4 mb-6">
                  <a href="https://x.com/RpsTitans_Game" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <TwitterXIcon className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com/rpstitans" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a href="https://youtube.com/@rpstitans" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <YouTubeIcon className="w-6 h-6" />
                  </a>
                  <a href="https://t.me/rps_titans" target="_blank" rel="noopener noreferrer" 
                     className="text-white/70 hover:text-[#FFD700] transition-colors hover:scale-110 transform">
                    <TelegramIcon className="w-6 h-6" />
                  </a>
                </div>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-white font-semibold text-sm mb-1">Contact</h5>
                    <p className="text-white/70 text-sm">support@rpstitans.xyz</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/60 text-sm">© 2025 RPS Titans. All rights reserved.</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-[#FFD700] transition-colors">Cookie Notice</a>
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