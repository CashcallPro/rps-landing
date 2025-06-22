import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isPartnerPage?: boolean;
}

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

const Header: React.FC<HeaderProps> = ({ isPartnerPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#191970]/90 text-white py-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#FFD700] hover:scale-105 transition-transform">
          <a href="/">RPS Titans</a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {isPartnerPage ? (
            <>
              <a href="/" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Home</a>
              <a href="#how-it-works" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">How It Works</a>
              <a href="#earnings" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Earnings</a>
            </>
          ) : (
            <>
              <a href="/#roadmap" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Roadmap</a>
              <a href="#features" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Features</a>
              <a href="/partners" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Partners</a>
            </>
          )}
          <a href="https://x.com/RpsTitans_Game" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">
            <TwitterXIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/rps_titans" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">
            <TelegramIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/RPS_Titans_bot?game=RPSTitans">
            <button className="bg-[#FFD700] text-[#191970] px-4 py-2 rounded-lg font-bold hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
              {isPartnerPage ? 'Add Bot' : 'Whitelist Now'}
            </button>
          </a>
        </div>

        {/* Mobile Menu - Play Now Button and Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a href="https://t.me/RPS_Titans_bot?game=RPSTitans">
            <button className="bg-[#FFD700] text-[#191970] px-3 py-2 rounded-lg font-bold text-sm hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
              {isPartnerPage ? 'Add Bot' : 'Whitelist Now'}
            </button>
          </a>
          <button 
            className="text-white hover:text-[#FFD700] transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu}></div>
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-[#191970] transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex justify-between items-center p-4 border-b border-white/20">
            <span className="text-lg font-bold text-[#FFD700]">Menu</span>
            <button onClick={closeMenu} className="text-white hover:text-[#FFD700]">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col p-4 space-y-4">
            {isPartnerPage ? (
              <>
                <a href="/" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Home</a>
                <a href="#how-it-works" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>How It Works</a>
                <a href="#earnings" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Earnings</a>
              </>
            ) : (
              <>
                <a href="/#roadmap" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Roadmap</a>
                <a href="#features" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Features</a>
                <a href="/partners" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Partners</a>
              </>
            )}
            
            <div className="flex gap-4 py-2">
              <a href="https://x.com/RpsTitans_Game" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <TwitterXIcon className="w-5 h-5" />
              </a>
              <a href="https://t.me/rps_titans" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <TelegramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;