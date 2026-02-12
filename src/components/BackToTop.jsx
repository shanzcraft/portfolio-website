import React from 'react';
import ArrowUpIcon from '../assets/icons/arrow-up.svg?react';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <ArrowUpIcon width={26} height={26} />
      Back To Top
    </button>
  );
}