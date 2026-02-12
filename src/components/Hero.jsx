import React from 'react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="cube">
        {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
          <div className={`face ${face}`} key={face} />
        ))}
      </div>
      <h1>Shannon Blitchok</h1>
    </div>
  );
}