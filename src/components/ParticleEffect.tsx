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
      particle.className = 'dust-particle';
      
      // Random size (more pixel-ish)
      const sizes = ['tiny', 'small', 'medium'];
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      particle.classList.add(randomSize);
      
      // Random glow effect
      if (Math.random() > 0.6) {
        particle.classList.add('glowing');
      }
      
      // Random position
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      particle.style.left = `${randomLeft}%`;
      particle.style.top = `${randomTop}%`;
      
      // Random animation delay
      const randomDelay = Math.random() * 10;
      particle.style.animationDelay = `${randomDelay}s`;
      
      // Random direction and distance
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--random-x', `${randomX}px`);
      particle.style.setProperty('--random-y', `${randomY}px`);
      
      container.appendChild(particle);
    }
  }, [density]);

  return <div ref={containerRef} className="dust-particles-container" />;
};

export default ParticleEffect;