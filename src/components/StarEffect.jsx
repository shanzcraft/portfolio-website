import { useEffect } from 'react';

export default function StarEffect() {
  useEffect(() => {
    const container = document.getElementById('star-container');
    
    const handleMouseMove = (e) => {
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        const size = 6 + Math.random() * 6;
        
        star.className = 'star';
        star.style.width = star.style.height = size + 'px';
        star.style.left = e.clientX + (Math.random() * 14 - 7) + 'px';
        star.style.top = e.clientY + (Math.random() * 14 - 7) + 'px';
        star.style.animationDuration = 0.8 + Math.random() * 0.6 + 's';
        star.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(star);
        
        setTimeout(() => container.removeChild(star), 1400);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div id="star-container"></div>;
}