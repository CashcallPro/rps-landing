import React, { useEffect, useRef } from 'react';

interface ParticleEffectProps {
  density?: number;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ density = 20 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles
    for (let i = 0; i < density; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size
      const sizes = ['small', 'medium', 'large'];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      particle.classList.add(randomSize);
      
      // Random twinkle effect
      if (Math.random() > 0.7) {
        particle.classList.add('twinkle');
      }
      
      // Random horizontal position
      const randomLeft = Math.random() * 100;
      particle.style.left = `${randomLeft}%`;
      
      // Random animation delay
      const randomDelay = Math.random() * 20;
      particle.style.animationDelay = `${randomDelay}s`;
      
      // Random horizontal drift
      const randomDrift = (Math.random() - 0.5) * 100;
      particle.style.setProperty('--random-x', `${randomDrift}px`);
      
      container.appendChild(particle);
    }
  }, [density]);

  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleEffect;