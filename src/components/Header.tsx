import React, { useState } from 'react';
import { Menu, X, Twitter, MessageCircle } from 'lucide-react';

interface HeaderProps {
  isPartnerPage?: boolean;
}

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
        <div className="text-2xl font-lilita text-[#FFD700] hover:scale-105 transition-transform">
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
              <a href="#about" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">About</a>
              <a href="#features" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Features</a>
              <a href="/partners" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">Partners</a>
            </>
          )}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors hover:scale-105 transition-transform">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="https://t.me/RPS_Titan_bot?game=RPSTitans">
            <button className="bg-[#FFD700] text-[#191970] px-4 py-2 rounded-lg font-lilita hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
              {isPartnerPage ? 'Add Bot' : 'Play Now'}
            </button>
          </a>
        </div>

        {/* Mobile Menu - Play Now Button and Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a href="https://t.me/RPS_Titan_bot?game=RPSTitans">
            <button className="bg-[#FFD700] text-[#191970] px-3 py-2 rounded-lg font-lilita text-sm hover:bg-[#FFD700]/90 hover:scale-105 transition-all">
              {isPartnerPage ? 'Add Bot' : 'Play Now'}
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
            <span className="text-lg font-lilita text-[#FFD700]">Menu</span>
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
                <a href="#about" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>About</a>
                <a href="#features" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Features</a>
                <a href="/partners" className="text-white hover:text-[#FFD700] transition-colors py-2" onClick={closeMenu}>Partners</a>
              </>
            )}
            
            <div className="flex gap-4 py-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFD700] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;