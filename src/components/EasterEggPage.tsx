import React from 'react';

const EasterEggPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center p-4"
      style={{ backgroundColor: '#e1d3c3' }}
    >
      <h1 className="text-3xl font-bold text-[#191970] mb-8 font-lilita">
        congratulation! now you have access to whitelist
      </h1>
      <img
        src="/images/easter-egg-image.png"
        alt="Easter Egg"
        className="max-w-sm w-full h-auto rounded-lg shadow-2xl mb-8"
      />
      <button
        className="bg-[#FFD700] text-[#191970] px-6 py-3 rounded-lg font-lilita text-xl hover:bg-[#FFD700]/90 hover:scale-105 transition-all"
        onClick={() => {
          // Placeholder for button action, e.g., redirect to a whitelist form or page
          alert('Button clicked! Implement whitelist access logic here.');
        }}
      >
        Become a Titan
      </button>
    </div>
  );
};

export default EasterEggPage;
