import React from 'react';
import { ArrowRight, Users, DollarSign, Zap, Shield, TrendingUp, Bot } from 'lucide-react';
import Header from './Header';

const Partners = () => {
  return (
    <div className="min-h-screen bg-[rgb(235,234,231)]">
      {/* Header */}
      <Header isPartnerPage={true} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#191970] to-[#191970]/80">
        <div className="container mx-auto text-center">
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-lilita text-[#191970] mb-8 text-center">
              💸 How Earnings Work
            </h2>
            <p className="text-lg text-[#191970]/90 mb-8 text-center">
              Every match in RPS Titans generates rewards — not just for players, but also for you.
            </p>

            {/* Per Game Round */}
            <div className="bg-white/50 p-6 rounded-lg backdrop-blur-sm mb-6">
              <h3 className="text-xl font-lilita text-[#191970] mb-4 flex items-center">
                <span className="text-2xl mr-3">🎮</span>
                Per Game Round:
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#191970]/10 rounded-lg">
                      <span className="text-sm font-semibold">2 Players stake:</span>
                      <span className="text-[#FFD700] font-lilita text-sm">10 tokens each = 20 tokens total</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                      <span className="text-sm font-semibold">Winner receives:</span>
                      <span className="text-green-600 font-lilita text-sm">18 tokens</span>
                    </div>
                    <div className="p-3 bg-[#FFD700]/20 rounded-lg">
                      <div className="text-sm font-semibold mb-2">2 tokens used as fees:</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>• RPS Titans ecosystem</span>
                          <span className="font-lilita">1.0 token</span>
                        </div>
                        <div className="flex justify-between">
                          <span>• Player reward pool</span>
                          <span className="font-lilita">0.5 token</span>
                        </div>
                        <div className="flex justify-between text-[#191970] font-semibold">
                          <span>• You as Titan admin</span>
                          <span className="font-lilita">0.5 token</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center p-4 bg-[#FFD700]/20 rounded-lg border-2 border-[#FFD700]">
                    <DollarSign className="w-12 h-12 text-[#FFD700] mx-auto mb-3" />
                    <div className="text-xl font-lilita text-[#191970]">0.25 tokens</div>
                    <div className="text-xs text-[#191970]/70">per player, per game</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-gradient-to-r from-[#191970] to-[#191970]/80 p-6 rounded-lg text-white">
              <h3 className="text-xl font-lilita mb-4 flex items-center">
                <span className="text-2xl mr-3">🧠</span>
                Example:
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-lilita text-[#FFD700]">50</div>
                  <div className="text-xs">Players in group</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-lilita text-[#FFD700]">3</div>
                  <div className="text-xs">Rounds per day</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-lilita text-[#FFD700]">75</div>
                  <div className="text-xs">Tokens/day</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <div className="text-2xl font-lilita text-[#FFD700]">2,200+</div>
                  <div className="text-xs">Tokens/month</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[#FFD700] font-lilita text-sm">→ 150 rounds → 75 tokens/day → Over 2,200 tokens/month, passively</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-[#191970] to-[#191970]/80">
        <div className="container mx-auto">
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
      <section>
        <footer className="bg-[#191970] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-lilita text-[#FFD700] mb-2">RPS Titans Partners</h3>
                <p className="text-sm text-white/70">© 2024 RPS Titans. All rights reserved.</p>
              </div>
              <div className="flex gap-6 items-center">
                <a href="/" className="hover:text-[#FFD700] transition-colors">Home</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Support</a>
                <a href="#" className="hover:text-[#FFD700] transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Partners;